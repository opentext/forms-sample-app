import 'split-pane-react/esm/themes/default.css';

import {
  useContext, useState, useEffect, useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Col, Container, Row, Tab, Tabs,
} from 'react-bootstrap';
import AppContext from '../store/context/app-context';
import { notificationTypes } from '../components/Notification';
import Toolbar from '../components/Toolbar';
import ThemeSelect from '../components/ThemeSelect';
import FormStatusDisplay from '../components/FormStatusDisplay';
import CheckpointControl from '../components/CheckpointControl';
import FormDesigner, { FORM_DESIGNER_ELEMENT_ID } from '../components/FormDesigner';
import Preview, { PREVIEW_ELEMENT_ID } from '../components/Preview';
import DesignConfig from '../components/DesignConfig';
import LocaleSelect from '../components/LocaleSelect';

const tabs = {
  designer: 'designer',
  preview: 'preview',
  designConfig: 'designConfig',
};

function FormDesignPage() {
  const {
    activeForm,
    formClient,
    isSpinnerVisible,
    refreshCheckpointList,
    hideSpinner,
    isUnsaved,
    setIsUnsaved,
    showNotification,
    showSpinner,
    setIsFormDesignChanged,
    setChangesFlagForActiveForm,
    setRefreshCheckpointList,
    activePreviewRuntimeElementId,
    setActivePreviewRuntimeElementId,
    activeRuntimeElementIds,
    setActiveRuntimeElementIds,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState('');
  const [canSave, setCanSave] = useState(false);
  const [canPublish, setCanPublish] = useState(false);
  const [activeTab, setActiveTab] = useState('designer');
  const [isAutoSave, setIsAutoSave] = useState(true);
  const checkpointControlRef = useRef();

  const handleOnClickSave = async () => {
    showSpinner('Saving form...');
    /* If auto-save is turned of, create a checkpoint that matches the moment of saving
    (to support resetting to that moment) */
    setIsFormDesignChanged(false);
    if (!isAutoSave) {
      await formClient.setForm({ htmlElementId: FORM_DESIGNER_ELEMENT_ID });
    }
    formClient.saveForm({ localReference: activeForm })
      .then(async (savedFormMetadata) => {
        setFormStatus(savedFormMetadata.version.status);
        if (!isAutoSave) {
          checkpointControlRef.current.refreshCheckpoints();
        }
        setChangesFlagForActiveForm();
        setCanSave(false);
        setCanPublish(true);
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

  const handleOnClickReload = () => {
    showSpinner('Reloading form...');
    formClient.getForm({ localReference: activeForm }).then(({ data }) => {
      formClient.loadForm({ namespace: data?.namespace, name: data?.name })
        .then(async (loadedForm) => {
          setIsUnsaved(loadedForm, false);
          setCanSave(false);
          setRefreshCheckpointList(refreshCheckpointList + 1);
          hideSpinner();
        })
        .catch((err) => {
          hideSpinner();
          showNotification(err.message, notificationTypes.error);
        });
    });
  };

  const handleOnClickPublish = () => {
    showSpinner('Publishing form...');
    formClient.publishForm({ localReference: activeForm })
      .then(async (publishedForm) => {
        setChangesFlagForActiveForm();
        setFormStatus(publishedForm.version.status);
        setCanPublish(false);
        hideSpinner();
      })
      .catch((err) => {
        hideSpinner();
        showNotification(err.message, notificationTypes.error);
      });
  };

  useEffect(() => {
    setIsAutoSave(formClient.getConfig().designConfig?.autoSave);
  }, [formClient]);

  // Dispose preview runtime when switching away from preview tab
  useEffect(() => {
    if (activeTab !== tabs.preview && activePreviewRuntimeElementId) {
      try {
        formClient.disposeRuntime({ htmlElementId: activePreviewRuntimeElementId });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Error disposing preview runtime ${activePreviewRuntimeElementId}:`, error);
      }
      setActivePreviewRuntimeElementId('');
    }
  }, [activeTab, activePreviewRuntimeElementId, formClient, setActivePreviewRuntimeElementId]);

  // Dispose runtime instances when navigating to design page from runtime page
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

  useEffect(() => {
    if (isUnsaved(activeForm) !== canSave) {
      setIsUnsaved(activeForm, canSave);
    }
  }, [activeForm, canSave, isUnsaved, setIsUnsaved]);

  useEffect(() => {
    formClient.getForm({ localReference: activeForm }).then(({ data }) => {
      if (!data.id || isUnsaved(activeForm)) {
        setCanSave(true);
        setCanPublish(false);
      } else if (data.status === 'DRAFT') {
        setCanPublish(true);
      }
    });

    // Sets the callback which will be triggered on every change to the canvas
    formClient.updateConfig(
      {
        designConfig: {
          afterFormDesignChangeCallback: () => {
            setCanSave(true);
            setCanPublish(false);
            if (!isAutoSave) {
              checkpointControlRef.current.enableSetCheckPointButton();
              checkpointControlRef.current.enableResetToCheckpointButton();
            } else {
              setChangesFlagForActiveForm();
              setIsFormDesignChanged(true);
            }
          },
        },
      },
    );
  }, [activeForm,
    formClient,
    isAutoSave,
    isUnsaved,
    setChangesFlagForActiveForm,
    setIsFormDesignChanged]);

  return (
    <div hidden={isSpinnerVisible}>
      <Toolbar
        title="Design Form"
        buttons={[
          {
            label: 'BACK',
            onClick: () => navigate(-1),
          },
          {
            disabled: !canSave,
            label: 'SAVE',
            onClick: handleOnClickSave,
          },
          {
            disabled: !canSave,
            label: 'RELOAD',
            onClick: handleOnClickReload,
          },
          {
            disabled: !canPublish,
            label: 'PUBLISH',
            onClick: handleOnClickPublish,
          },
          {
            disabled: canSave,
            label: 'RUN',
            onClick: () => navigate('/runtime'),
          },
        ]}
      >
        {!isAutoSave && <CheckpointControl ref={checkpointControlRef} />}
        <ThemeSelect
          designerElementId={FORM_DESIGNER_ELEMENT_ID}
          runtimeElementId={activeTab === PREVIEW_ELEMENT_ID ? PREVIEW_ELEMENT_ID : ''}
        />
        <LocaleSelect
          designerElementId={FORM_DESIGNER_ELEMENT_ID}
        />
        <FormStatusDisplay formStatus={formStatus} />
      </Toolbar>
      <Container fluid>
        <Row>
          <Col>
            <Tabs
              activeKey={activeTab}
              onSelect={(key) => {
                setActiveTab(key);
              }}
            >
              <Tab
                eventKey={tabs.designer}
                title="Designer"
              >
                <FormDesigner />
              </Tab>
              <Tab
                eventKey={tabs.preview}
                title="Preview"
                unmountOnExit
              >
                <Preview />
              </Tab>
              <Tab
                eventKey={tabs.designConfig}
                title="Design Config"
                unmountOnExit
              >
                <DesignConfig />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FormDesignPage;
