import { useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FORM_DESIGNER_ELEMENT_ID } from './FormDesigner';
import AppContext from '../store/context/app-context';

function SetCheckpointModal({ show, refreshCheckpoints, setShow }) {
  const { formClient, setIsFormDesignChanged } = useContext(AppContext);
  const [checkpointName, setCheckpointName] = useState('');
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCheckpointName('');
    setValidated(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormDesignChanged(true);
    if (event.currentTarget.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      formClient.setForm({ htmlElementId: FORM_DESIGNER_ELEMENT_ID, displayName: checkpointName })
        .then(() => {
          refreshCheckpoints();
          handleClose();
        });
    }
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Set Checkpoint</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Checkpoint name</Form.Label>
            <Form.Control
              type="text"
              required
              value={checkpointName}
              onChange={({ target }) => setCheckpointName(target.value)}
            />
            <Form.Control.Feedback type="invalid">Checkpoint name must have at least one character</Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save Checkpoint</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

SetCheckpointModal.propTypes = {
  show: PropTypes.bool.isRequired,
  refreshCheckpoints: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default SetCheckpointModal;
