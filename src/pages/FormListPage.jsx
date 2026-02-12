import './FormListPage.css';

import {
  useCallback, useContext, useEffect, useRef, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Tab, Tabs } from 'react-bootstrap';
import AppContext from '../store/context/app-context';
import { notificationTypes } from '../components/Notification';
import Toolbar from '../components/Toolbar';
import DesignerConfigPicker from '../components/DesignerConfigPicker';
import FormsTableLocal from '../components/FormsTableLocal';
import FormsTableRemote from '../components/FormsTableRemote';
import FormSpecsModal from '../components/FormSpecsModal';
import ImportModal from '../components/ImportModal';
import AclModal from '../components/AclModal';

function FormSpecsPage() {
  const {
    activeForm,
    formClient,
    isSpinnerVisible,
    refreshLocalList,
    refreshRemoteList,
    hideSpinner,
    isUnsaved,
    setActiveForm,
    setIsUnsaved,
    setRefreshLocalList,
    setRefreshRemoteList,
    showNotification,
    showSpinner,
    activeDesignerElementId,
    setActiveDesignerElementId,
    activePreviewRuntimeElementId,
    setActivePreviewRuntimeElementId,
    activeRuntimeElementIds,
    setActiveRuntimeElementIds,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [remoteForm, setRemoteForm] = useState();
  const [clearSelectedLocalFormToggle, setClearSelectedLocalFormToggle] = useState(false);
  const [clearSelectedRemoteFormToggle, setClearSelectedRemoteFormToggle] = useState(false);
  const [canCreate, setCanCreate] = useState(true);
  const [canEditDesign, setCanEditDesign] = useState(false);
  const [canLoad, setCanLoad] = useState(false);
  const [canSave, setCanSave] = useState(false);
  const [canRun, setCanRun] = useState(false);
  const [canEditSpecs, setCanEditSpecs] = useState(false);
  const [showFormSpecsModal, setShowFormSpecsModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showAclModal, setShowAclModal] = useState(false);
  const [currentAcl, setCurrentAcl] = useState(null);
  const [isEditAcl, setIsEditAcl] = useState(false);
  const isMounted = useRef(false);

  const refreshLocalFormsList = useCallback(() => {
    setRefreshLocalList(refreshLocalList + 1);
  }, [refreshLocalList, setRefreshLocalList]);

  const refreshRemoteFormsList = useCallback(() => {
    setRefreshRemoteList(refreshRemoteList + 1);
  }, [refreshRemoteList, setRefreshRemoteList]);

  const handleOnFormDeselect = () => {
    setActiveForm();
    setRemoteForm();
    setCanLoad(false);
    setCanRun(false);
  };

  const handleOnLocalFormSelect = ({ selectedRows }) => {
    handleOnFormDeselect();
    const form = selectedRows[0];
    if (form) {
      setClearSelectedRemoteFormToggle(!clearSelectedRemoteFormToggle);
      const { localRef } = form;
      const unsaved = isUnsaved(localRef);
      setActiveForm(localRef);
      setCanRun(!canSave);
      setCanSave(unsaved);
    }
  };

  const handleOnRemoteFormSelect = ({ selectedRows }) => {
    handleOnFormDeselect();
    const form = selectedRows[0];
    if (form) {
      setClearSelectedLocalFormToggle(!clearSelectedLocalFormToggle);
      setRemoteForm({ namespace: form.namespace, name: form.name });
      setCanCreate(false);
      setCanLoad(true);
    }
  };

  const handleOnFormsSpecsModalClose = () => {
    refreshLocalFormsList();
    setShowFormSpecsModal(false);
  };

  const handleOnImportModalClose = () => {
    refreshLocalFormsList();
    refreshRemoteFormsList();
    setShowImportModal(false);
  };

  const handleOnAclModalClose = () => {
    setShowAclModal(false);
    setCurrentAcl(null);
    setIsEditAcl(false);
  };

  const handleOnClickLoad = () => {
    showSpinner('Loading form...');
    formClient.loadForm({ namespace: remoteForm?.namespace, name: remoteForm?.name })
      .then((loadedForm) => {
        setActiveForm(loadedForm);
        setIsUnsaved(loadedForm, false);
        setCanSave(false);
        setCanLoad(false);
        refreshLocalFormsList();
        hideSpinner();
      })
      .catch((err) => {
        hideSpinner();
        showNotification(err.message, notificationTypes.error);
      });
  };

  const handleOnClickExport = async () => {
    showSpinner('Exporting form...');
    formClient.exportForm({ localReference: activeForm })
      .then(async (exportedForm) => {
        const name = exportedForm.data?.name ?? 'form';
        const content = new Blob([JSON.stringify(exportedForm, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(content);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${name}.otui`;
        document.body.appendChild(link);
        link.click();
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        hideSpinner();
      })
      .catch((err) => {
        hideSpinner();
        showNotification(err.message, notificationTypes.error);
      });
  };
  const handleOnClickDelete = () => {
    showSpinner('Deleting form...');
    formClient.deleteLocalForm({
      localReference: activeForm,
      deleteRemote: true,
      force: false,
    /*
    formClient.deleteRemoteForm({
      namespace: remoteForm?.namespace,
      name: remoteForm?.name,
      force: false,
      deleteLocal: false,
    */
    }).then(() => {
      setIsUnsaved(activeForm, false);
      setActiveForm();
      setRemoteForm();
      setCanSave(false);
      setCanLoad(false);
      refreshLocalFormsList();
      hideSpinner();
    }).catch((err) => {
      hideSpinner();
      showNotification(err.message, notificationTypes.error);
    });
  };

  const handleOnClickSave = async () => {
    showSpinner('Saving form...');
    formClient.saveForm({ localReference: activeForm })
      .then(async () => {
        setIsUnsaved(activeForm, false);
        setCanSave(false);
        refreshLocalFormsList();
        refreshRemoteFormsList();
        hideSpinner();
      })
      .catch((err) => {
        hideSpinner();
        if (typeof err === 'string') {
          showNotification(err, notificationTypes.error);
        } else if (typeof err === 'object' && err.message) {
          showNotification(err.message, notificationTypes.error);
        } else {
          showNotification('Server error, please try later ', notificationTypes.error);
        }
      });
  };

  const handleUnsaved = (localReference) => {
    setIsUnsaved(localReference, true);
    setCanSave(true);
  };

  const handleOnClickEditDesign = async () => {
    navigate('/edit');
  };

  useEffect(() => {
    setCanCreate(!activeForm && !canLoad);
    setCanEditSpecs(!!activeForm);
    setCanEditDesign(!!activeForm);
  }, [activeForm, canLoad]);

  useEffect(() => {
    if (formClient && isMounted.current && activeForm && activeForm !== 'undefined') {
      formClient.getForm({ localReference: activeForm }).then(({ data }) => {
        if (data.id) {
          setCanRun(!canSave);
        } else {
          setCanRun(false);
        }
      });
    }
  }, [activeForm, canSave, formClient]);

  useEffect(() => {
    setActiveForm();
  }, [setActiveForm]);

  useEffect(() => {
    if (formClient && !isMounted.current) {
      refreshLocalFormsList();
      refreshRemoteFormsList();
      isMounted.current = true;
    }
  }, [formClient, refreshLocalFormsList, refreshRemoteFormsList]);

  // Dispose designer when navigating to list page from design page
  useEffect(() => {
    if (activeDesignerElementId) {
      try {
        formClient.disposeDesigner({ htmlElementId: activeDesignerElementId });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error disposing designer ${activeDesignerElementId}:`, error);
      }
      setActiveDesignerElementId('');
    }
  }, [formClient, activeDesignerElementId, setActiveDesignerElementId]);

  // Dispose preview runtime when navigating to list page
  useEffect(() => {
    if (activePreviewRuntimeElementId) {
      try {
        formClient.disposeRuntime({ htmlElementId: activePreviewRuntimeElementId });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error disposing preview runtime ${activePreviewRuntimeElementId}:`, error);
      }
      setActivePreviewRuntimeElementId('');
    }
  }, [formClient, activePreviewRuntimeElementId, setActivePreviewRuntimeElementId]);

  // Dispose runtime instances when navigating to list page from runtime page
  useEffect(() => {
    if (activeRuntimeElementIds.length > 0) {
      activeRuntimeElementIds.forEach((elementId) => {
        if (elementId) {
          try {
            formClient.disposeRuntime({ htmlElementId: elementId });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(`Error disposing runtime ${elementId}:`, error);
          }
        }
      });
      setActiveRuntimeElementIds([]);
    }
  }, [formClient, activeRuntimeElementIds, setActiveRuntimeElementIds]);

  return (
    <div hidden={isSpinnerVisible}>
      {isMounted.current
      && (
        <FormSpecsModal
          show={showFormSpecsModal}
          onHide={handleOnFormsSpecsModalClose}
          onUnsaved={handleUnsaved}
        />
      )}
      <ImportModal
        show={showImportModal}
        onHide={handleOnImportModalClose}
      />
      <AclModal
        show={showAclModal}
        onHide={handleOnAclModalClose}
        acl={currentAcl}
        isEdit={isEditAcl}
      />
      <Toolbar
        title="Local and Remote Forms"
        buttons={[
          {
            label: 'CREATE',
            visible: canCreate,
            onClick: () => setShowFormSpecsModal(true),
          },
          {
            label: 'EDIT SPECS',
            visible: canEditSpecs,
            onClick: () => setShowFormSpecsModal(true),
          },
          {
            label: 'LOAD',
            visible: canLoad,
            onClick: handleOnClickLoad,
          },
          {
            label: 'IMPORT',
            visible: canCreate,
            onClick: () => setShowImportModal(true),
          },
          {
            label: 'EXPORT',
            visible: canEditSpecs,
            onClick: handleOnClickExport,
          },
          {
            disabled: !canSave,
            label: 'SAVE',
            visible: canEditSpecs,
            onClick: handleOnClickSave,
          },
          {
            disabled: !canEditDesign,
            label: 'DESIGN',
            onClick: handleOnClickEditDesign,
          },
          {
            disabled: !canRun,
            label: 'RUN',
            onClick: () => navigate('/runtime'),
          },
          {
            label: 'DELETE',
            onClick: handleOnClickDelete,
          },
        ]}
      >
        <DesignerConfigPicker />
      </Toolbar>
      <Container fluid>
        <Tabs className="pt-2">
          <Tab eventKey="localForms" title="Local forms" className="form-list-tab">
            <FormsTableLocal
              clearSelectedRow={clearSelectedLocalFormToggle}
              onFormSelect={handleOnLocalFormSelect}
            />
          </Tab>
          <Tab eventKey="remoteForms" title="Remote forms" className="form-list-tab">
            <FormsTableRemote
              clearSelectedRow={clearSelectedRemoteFormToggle}
              onFormSelect={handleOnRemoteFormSelect}
            />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default FormSpecsPage;
