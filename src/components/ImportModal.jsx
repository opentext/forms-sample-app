import './SpinnerWithMessage.css';

import { useContext, useRef, useState } from 'react';
import {
  Button,
  Form,
  Modal,
  Spinner,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';
import ImportCheckModal from './ImportCheckModal';

function ImportModal({
  show,
  onHide,
}) {
  const {
    formClient,
    isSpinnerVisible,
  } = useContext(AppContext);
  const [fileName, setFileName] = useState('');
  const [fileContents, setFileContents] = useState(undefined);
  const [namespace, setNamespace] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [saveForm, setSaveForm] = useState(true);
  const [checkResult, setCheckResult] = useState({});
  const [importSpinner, setImportSpinner] = useState(false);
  const [importSpinnerMessage, setImportSpinnerMessage] = useState('');
  const [showImportCheckModal, setShowImportCheckModal] = useState(false);
  const fileInputRef = useRef(null);

  const resetFile = () => {
    setFileName('');
    setFileContents(undefined);
    setCheckResult({});
  };

  const handleOnClose = () => {
    resetFile();
    setNamespace(undefined);
    setName(undefined);
    setSaveForm(true);
    setImportSpinner(false);
    onHide();
  };

  const handleOnImportCheckModalClose = () => {
    setShowImportCheckModal(false);
  };

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleClearFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    resetFile();
  };

  const handleFileChange = (event) => {
    resetFile();
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          setFileContents(JSON.parse(e.target.result));
        } catch (error) {
          setFileContents(undefined);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleNamespaceChange = (event) => {
    setNamespace(event.target.value === '' ? undefined : event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value === '' ? undefined : event.target.value);
  };

  const handleImportCheck = async () => {
    if (fileContents) {
      setImportSpinnerMessage('Checking...');
      setImportSpinner(true);
      const result = await formClient.preImportFormCheck({
        form: fileContents,
        namespace,
        name,
        saveForm,
      });
      setCheckResult(result);
      setImportSpinner(false);
      setShowImportCheckModal(true);
    }
  };

  const handleImport = async () => {
    if (fileContents) {
      setImportSpinnerMessage('Importing...');
      setImportSpinner(true);
      await formClient.importForm({
        form: fileContents,
        namespace,
        name,
        saveForm,
      });
      setImportSpinner(false);
      handleOnClose();
    }
  };

  return (
    <>
      <ImportCheckModal
        show={showImportCheckModal}
        onHide={handleOnImportCheckModalClose}
        result={checkResult}
      />
      <Modal centered show={show && !isSpinnerVisible} onHide={handleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Import Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {importSpinner && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1051,
              }}
            >
              <center className="spinner-wrapper">
                <br />
                <Spinner variant="primary" />
                <span className="spinner-message">{importSpinnerMessage}</span>
              </center>
            </div>
          )}
          <Form.Group className="mb-3">
            <div className="d-flex">
              <div style={{ width: '100%' }}>
                <Form.Control
                  type="text"
                  isInvalid={fileName && !fileContents}
                  value={fileName}
                  placeholder="No form selected"
                  readOnly
                />
                <Form.Control.Feedback type="invalid">File content is not valid</Form.Control.Feedback>
              </div>
              <div>
                <Button variant="primary" onClick={handleSelectFile} className="ms-2">
                  Select
                </Button>
              </div>
              <div>
                <Button variant="secondary" onClick={handleClearFile} className="ms-2">
                  Clear
                </Button>
              </div>
              <Form.Control
                type="file"
                accept=".otui"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Namespace</Form.Label>
            <Form.Control type="text" placeholder="New namespace" onChange={handleNamespaceChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="New name" onChange={handleNameChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Save form after import"
              checked={saveForm}
              onChange={(e) => setSaveForm(e.target.checked)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOnClose}>Cancel</Button>
          <Button variant="success" disabled={!fileContents} onClick={handleImportCheck}>Check</Button>
          <Button variant="primary" disabled={!fileContents} onClick={handleImport}>Import</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ImportModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ImportModal;
