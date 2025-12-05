import {
  useState, useEffect, useContext, useCallback,
} from 'react';
import {
  Modal, Button, Container, Row, Col, Tab, Tabs, ButtonGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';
import { notificationTypes } from './Notification';
import AclTableLocal from './AclTableLocal';
import AclTableRemote from './AclTableRemote';
import AclModal from './AclModal';

function AclManagementModal({
  show,
  onHide,
  title,
}) {
  const {
    formClient,
    showNotification,
  } = useContext(AppContext);

  const [activeLocalAcl, setActiveLocalAcl] = useState(null);
  const [activeRemoteAcl, setActiveRemoteAcl] = useState(null);
  const [clearSelectedLocalAclToggle, setClearSelectedLocalAclToggle] = useState(false);
  const [clearSelectedRemoteAclToggle, setClearSelectedRemoteAclToggle] = useState(false);
  const [refreshLocalTrigger, setRefreshLocalTrigger] = useState(0);
  const [refreshRemoteTrigger, setRefreshRemoteTrigger] = useState(0);
  const [showAclModal, setShowAclModal] = useState(false);
  const [currentAcl, setCurrentAcl] = useState(null);
  const [isEditAcl, setIsEditAcl] = useState(false);
  const [activeTab, setActiveTab] = useState('localAcls');

  // Action button states
  const [canCreate, setCanCreate] = useState(true);
  const [canEdit, setCanEdit] = useState(false);
  const [canSave, setCanSave] = useState(false);
  const [canLoad, setCanLoad] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  const refreshLocalAcls = useCallback(() => {
    setRefreshLocalTrigger((prev) => prev + 1);
  }, []);

  const refreshRemoteAcls = useCallback(() => {
    setRefreshRemoteTrigger((prev) => prev + 1);
  }, []);

  const handleOnAclDeselect = () => {
    setActiveLocalAcl(null);
    setActiveRemoteAcl(null);
    setCanEdit(false);
    setCanSave(false);
    setCanLoad(false);
    setCanDelete(false);
  };

  const handleOnLocalAclSelect = ({ selectedRows }) => {
    handleOnAclDeselect();
    const acl = selectedRows[0];
    if (acl) {
      setClearSelectedRemoteAclToggle(!clearSelectedRemoteAclToggle);
      setActiveLocalAcl(acl);
      setCanEdit(true);
      setCanSave(true);
      setCanDelete(true);
    }
  };

  const handleOnRemoteAclSelect = ({ selectedRows }) => {
    handleOnAclDeselect();
    const acl = selectedRows[0];
    if (acl) {
      setClearSelectedLocalAclToggle(!clearSelectedLocalAclToggle);
      setActiveRemoteAcl(acl);
      setCanLoad(true);
      setCanDelete(true);
    }
  };

  const handleOnAclModalClose = () => {
    setShowAclModal(false);
    setCurrentAcl(null);
    setIsEditAcl(false);
    refreshLocalAcls();
    refreshRemoteAcls();
  };

  // Create new ACL
  const handleCreateAcl = () => {
    setCurrentAcl(null);
    setIsEditAcl(false);
    setShowAclModal(true);
  };

  // Edit selected ACL
  const handleEditAcl = async () => {
    if (!activeLocalAcl) return;

    try {
      const aclInfo = await formClient.getAcl({ localReference: activeLocalAcl.localRef });
      setCurrentAcl({
        data: aclInfo.data,
        localReference: aclInfo.localRef || activeLocalAcl.localRef,
      });
      setIsEditAcl(true);
      setShowAclModal(true);
    } catch (error) {
      showNotification(
        error.message || 'Failed to load ACL for editing',
        notificationTypes.error,
      );
    }
  };

  // Save ACL to remote
  const handleSaveAcl = async () => {
    if (!activeLocalAcl) return;

    try {
      await formClient.saveAcl({ localReference: activeLocalAcl.localRef });
      refreshLocalAcls();
      refreshRemoteAcls();
    } catch (error) {
      showNotification(
        error.message || 'Failed to save ACL',
        notificationTypes.error,
      );
    }
  };

  // Load ACL from remote
  const handleLoadAcl = async () => {
    if (!activeRemoteAcl) return;

    try {
      await formClient.loadAcl({ id: activeRemoteAcl.id });
      showNotification('ACL loaded successfully', notificationTypes.success);
      refreshLocalAcls();
      handleOnAclDeselect();
    } catch (error) {
      showNotification(
        error.message || 'Failed to load ACL',
        notificationTypes.error,
      );
    }
  };

  // Delete ACL
  const handleDeleteAcl = async () => {
    try {
      if (activeLocalAcl) {
        await formClient.deleteLocalAcl({
          localReference: activeLocalAcl.localRef,
          deleteRemote: true,
        });
        showNotification('Local ACL deleted successfully', notificationTypes.success);
        refreshLocalAcls();
      } else if (activeRemoteAcl) {
        await formClient.deleteRemoteAcl({
          id: activeRemoteAcl.id,
          deleteLocal: true,
        });
        showNotification('Remote ACL deleted successfully', notificationTypes.success);
        refreshRemoteAcls();
      }
      handleOnAclDeselect();
    } catch (error) {
      showNotification(
        error.message || 'Failed to delete ACL',
        notificationTypes.error,
      );
    }
  };

  useEffect(() => {
    setCanCreate(!activeLocalAcl && !activeRemoteAcl);
  }, [activeLocalAcl, activeRemoteAcl]);

  return (
    <>
      <Modal show={show} onHide={onHide} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            {/* Action Buttons */}
            <Row className="mb-3">
              <Col className="d-flex justify-content-start">
                <ButtonGroup>
                  <Button
                    onClick={handleCreateAcl}
                    disabled={!canCreate}
                  >
                    CREATE ACL
                  </Button>
                  <Button
                    onClick={handleEditAcl}
                    disabled={!canEdit}
                  >
                    EDIT ACL
                  </Button>
                  <Button
                    onClick={handleSaveAcl}
                    disabled={!canSave}
                  >
                    SAVE ACL
                  </Button>
                  <Button
                    onClick={handleLoadAcl}
                    disabled={!canLoad}
                  >
                    LOAD ACL
                  </Button>
                  <Button
                    onClick={handleDeleteAcl}
                    disabled={!canDelete}
                  >
                    DELETE ACL
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>

            {/* ACL Tables */}
            <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)} className="mb-3">
              <Tab eventKey="localAcls" title="Local ACLs">
                <AclTableLocal
                  clearSelectedRow={clearSelectedLocalAclToggle}
                  onAclSelect={handleOnLocalAclSelect}
                  refreshTrigger={refreshLocalTrigger}
                />
              </Tab>
              <Tab eventKey="remoteAcls" title="Remote ACLs">
                <AclTableRemote
                  clearSelectedRow={clearSelectedRemoteAclToggle}
                  onAclSelect={handleOnRemoteAclSelect}
                  refreshTrigger={refreshRemoteTrigger}
                />
              </Tab>
            </Tabs>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ACL Create/Edit Modal */}
      <AclModal
        show={showAclModal}
        onHide={handleOnAclModalClose}
        acl={currentAcl?.data}
        localReference={currentAcl?.localReference}
        isEdit={isEditAcl}
      />
    </>
  );
}

AclManagementModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AclManagementModal;
