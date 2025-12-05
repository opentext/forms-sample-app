import { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';

function ImportCheckModal({
  show,
  onHide,
  result,
}) {
  const {
    isSpinnerVisible,
  } = useContext(AppContext);

  const handleOnClose = () => {
    onHide();
  };

  const getResultDescription = () => {
    if (result.isFormImportParametersValid === false
        || result.isFormServiceUrlInitialized === false
        || result.isFormImportAuthorized === false) {
      return 'Some checks have produced errors - the import will fail';
    }
    if (result.remoteFormExists === true
        || result.remoteFormStatus === 'DRAFT'
        || result.localFormExists === true
        || result.localFormHasUnsavedChanges === true) {
      return 'Some checks have produced warnings - the import may produce side effects, such as overwriting an existing form';
    }
    return 'All checks have passed - the import is likely to succeed';
  };

  return (
    <Modal centered show={show && !isSpinnerVisible} onHide={handleOnClose}>
      <Modal.Header closeButton>
        <Modal.Title>Import Check Result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>{result.isFormImportParametersValid ? '✔ Imported form is valid' : '❌ Imported form is not valid'}</Form.Label>
          <br />
          <Form.Label>{result.isFormServiceUrlInitialized ? '✔ Form Service URL has been initialized' : '❌ Form Service URL has not been initialized'}</Form.Label>
          {typeof result.remoteFormExists === 'boolean'
          && (
            <>
              <br />
              <Form.Label>{result.remoteFormExists ? '⚠ Remote form already exists' : '✔ Remote form does not exist'}</Form.Label>
            </>
          )}
          {typeof result.remoteFormStatus === 'string'
          && (
            <>
              <br />
              <Form.Label>{result.remoteFormStatus === 'DRAFT' ? '⚠ Remote form status is DRAFT' : '✔ Remote form status is PUBLISHED'}</Form.Label>
            </>
          )}
          {typeof result.isFormImportAuthorized === 'boolean'
          && (
            <>
              <br />
              <Form.Label>{result.isFormImportAuthorized ? '✔ Form import is authorized' : '❌ Form import is not authorized'}</Form.Label>
            </>
          )}
          {typeof result.localFormExists === 'boolean'
          && (
            <>
              <br />
              <Form.Label>{result.localFormExists ? '⚠ Local form already exists' : '✔ Local form does not exist'}</Form.Label>
            </>
          )}
          {typeof result.localFormHasUnsavedChanges === 'boolean'
          && (
            <>
              <br />
              <Form.Label>{result.localFormHasUnsavedChanges ? '⚠ Local form has unsaved changes' : '✔ Local form does not have unsaved changes'}</Form.Label>
            </>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{getResultDescription()}</Form.Label>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleOnClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

ImportCheckModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  result: PropTypes.shape({
    isFormImportParametersValid: PropTypes.bool,
    isFormServiceUrlInitialized: PropTypes.bool,
    isFormImportAuthorized: PropTypes.bool,
    remoteFormExists: PropTypes.bool,
    remoteFormStatus: PropTypes.string,
    localFormExists: PropTypes.bool,
    localFormHasUnsavedChanges: PropTypes.bool,
  }).isRequired,
};

export default ImportCheckModal;
