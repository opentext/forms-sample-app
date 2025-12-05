import './FormSpecsModal.css';

import {
  useContext, useEffect, useState, useCallback,
} from 'react';
import {
  Button, Modal, Tab, Tabs,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { convertStringToNumber } from '../utils/string-util';
import AppContext from '../store/context/app-context';
import { notificationTypes } from './Notification';
import FormMetadataInput from './FormMetadataInput';
import FormSchemaInput from './FormSchemaInput';

const emptyMetadata = {
  namespace: '',
  displayName: '',
  name: '',
  description: '',
  versionLabels: '',
  aclLocalReference: '',
};

const emptySchemaDefinition = {
  defaultLocale: 'en',
  schema: {
    $id: 'https://www.opentext.com/ocp/empty-schema',
    type: 'object',
    required: [],
    properties: {},
  },
  localizations: {},
};

const tabs = {
  metadata: 'metadata',
  schema: 'schema',
};

function FormSpecsModal({
  show,
  onHide,
  onUnsaved,
}) {
  const {
    activeForm,
    formClient,
    isSpinnerVisible,
    showNotification,
  } = useContext(AppContext);
  const [isCreate, setIsCreate] = useState(true);
  const [metadata, setMetadata] = useState(emptyMetadata);
  const [localAcls, setLocalAcls] = useState([]);
  const [onCancelMetadata, setOnCancelMetadata] = useState();
  const [onCancelSchemaDefinition, setOnCancelSchemaDefinition] = useState();
  const [hasMetadataBeenModified, setHasMetadataBeenModified] = useState(false);
  const [schemaDefinition, setSchemaDefinition] = useState();
  const [hasSchemaDefinitionBeenModified, setHasSchemaDefinitionBeenModified] = useState(false);
  const [canCreateOrUpdateFormSpecs, setCanCreateOrUpdateFormSpecs] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);
  const [selectedTab, setSelectedTab] = useState();

  const fetchLocalAcls = useCallback(async () => {
    const aclList = await formClient.listLocalAcls({});
    setLocalAcls(aclList);
  }, [formClient]);

  const checkIfFormExists = async () => {
    try {
      const requestMetadata = {
        namespace: metadata.namespace,
        name: metadata.name,
      };
      const list = await formClient.listRemoteForms(requestMetadata);

      return list.forms.length === 1;
    } catch (err) {
      if (err.message === "Cannot read properties of undefined (reading 'design')") {
        // Form exists, but you don't have access to it, so no notification required
      } else {
        showNotification(err.message || 'An error occurred', notificationTypes.error);
      }
      return true;
    }
  };

  const getStringifiedSchemaDefinition = () => (
    schemaDefinition ? JSON.stringify(schemaDefinition) : JSON.stringify(emptySchemaDefinition)
  );

  const handleMetadataModified = (modifiedMetadata) => {
    setMetadata(modifiedMetadata);
    setHasMetadataBeenModified(true);
  };

  const handleOnClose = () => {
    setHasMetadataBeenModified(false);
    setHasSchemaDefinitionBeenModified(false);
    setCanCreateOrUpdateFormSpecs(false);
    setSelectedTab(tabs.metadata);
    onHide();
  };

  const handleOnClickCancel = () => {
    setMetadata(onCancelMetadata);
    setSchemaDefinition(onCancelSchemaDefinition);
    handleOnClose();
  };

  const handleCreateOrUpdateFormSpecs = async () => {
    if (hasSchemaDefinitionBeenModified || hasMetadataBeenModified) {
      try {
        if (isCreate) {
          if (await checkIfFormExists()) {
            setAlreadyExists(true);
            setSelectedTab(tabs.metadata);
            setCanCreateOrUpdateFormSpecs(false);
            return;
          }
          const newFormLocalReference = await formClient.createForm({
            namespace: metadata.namespace,
            displayName: metadata.displayName,
            name: metadata.name,
            description: metadata.description,
            versionLabels: metadata.versionLabels,
            schema: getStringifiedSchemaDefinition(),
            gridColumnCount:
              convertStringToNumber(process.env.REACT_APP_GRID_COLUMN_COUNT, 4),
            formColumnCount:
              convertStringToNumber(process.env.REACT_APP_FORM_COLUMN_COUNT, 1),
            aclLocalReference: metadata.aclLocalReference || undefined,
          });
          onUnsaved(newFormLocalReference);
          setMetadata(emptyMetadata);
          setSchemaDefinition();
        } else {
          await formClient.updateForm({
            localReference: activeForm,
            form: {
              displayName: metadata.displayName,
              description: metadata.description,
              versionLabels: metadata.versionLabels,
              schema: getStringifiedSchemaDefinition(),
              aclLocalReference: metadata.aclLocalReference,
            },
          });
          onUnsaved(activeForm);
        }
      } catch (err) {
        showNotification(err.message, notificationTypes.error);
      }
    }
    handleOnClose();
  };

  useEffect(() => {
    if (
      (
        hasSchemaDefinitionBeenModified
        && metadata.namespace
        && metadata.displayName
        && metadata.name
      ) || hasMetadataBeenModified) {
      setCanCreateOrUpdateFormSpecs(true);
    } else {
      setCanCreateOrUpdateFormSpecs(false);
    }
  }, [hasMetadataBeenModified, hasSchemaDefinitionBeenModified, metadata]);

  useEffect(() => {
    if (activeForm && activeForm !== 'undefined') {
      formClient.getForm({ localReference: activeForm }).then(({ data }) => {
        const formMetadata = {
          namespace: data.namespace,
          displayName: data.displayName,
          name: data.name,
          description: data.description,
          versionLabels: data.versionLabels?.join(',') ?? '',
          aclLocalReference: data.aclId || '',
        };
        setMetadata(formMetadata);
        setOnCancelMetadata({ ...formMetadata });
        const { content } = data;
        const formSchema = {
          defaultLocale: data.defaultLocale,
          schema: content.schema,
          localizations: content.localizations,
        };
        setSchemaDefinition(formSchema);
        setOnCancelSchemaDefinition({ ...formSchema });
        setIsCreate(false);
      });
    } else {
      setMetadata(emptyMetadata);
      setOnCancelMetadata(emptyMetadata);
      setSchemaDefinition();
      setOnCancelSchemaDefinition();
      setIsCreate(true);
    }
  }, [activeForm, formClient]);

  // Fetch local ACLs when modal is shown
  useEffect(() => {
    if (show) {
      fetchLocalAcls();
    }
  }, [show, fetchLocalAcls]);

  return (
    <Modal centered size="xl" show={show && !isSpinnerVisible} onHide={handleOnClickCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Form Specification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={selectedTab} onSelect={(key) => setSelectedTab(key)}>
          <Tab eventKey={tabs.metadata} title="Metadata" className="form-specs-tab">
            <FormMetadataInput
              alreadyExists={alreadyExists}
              isCreate={isCreate}
              metadata={metadata}
              localAcls={localAcls}
              onFormIdentifierChanged={() => {
                if (alreadyExists) {
                  setAlreadyExists(false);
                  setCanCreateOrUpdateFormSpecs(true);
                }
              }}
              onMetadataModified={handleMetadataModified}
            />
          </Tab>
          <Tab eventKey={tabs.schema} title="Schema" className="form-specs-tab">
            <FormSchemaInput
              disabled={false}
              schemaDefinition={schemaDefinition}
              setSchemaDefinition={setSchemaDefinition}
              setHasSchemaDefinitionBeenModified={setHasSchemaDefinitionBeenModified}
            />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleOnClickCancel}>
          Cancel
        </Button>
        <Button disabled={!canCreateOrUpdateFormSpecs} onClick={handleCreateOrUpdateFormSpecs}>
          {isCreate ? 'Create Form' : 'Update Specs'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

FormSpecsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onUnsaved: PropTypes.func.isRequired,
};

export default FormSpecsModal;
