import { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FORM_DESIGNER_ELEMENT_ID } from './FormDesigner';
import AppContext from '../store/context/app-context';

function ResetToCheckpointModal({
  checkpoints, show, refreshCheckpoints, setCanResetToCheckpoint, setShow,
}) {
  const { formClient, setIsFormDesignChanged } = useContext(AppContext);
  const [selectedCheckpoint, setSelectedCheckpoint] = useState();

  const handleClose = () => setShow(false);

  const handleResetToCheckpoint = () => {
    setIsFormDesignChanged(true);
    formClient.resetForm({
      htmlElementId: FORM_DESIGNER_ELEMENT_ID,
      timestamp: selectedCheckpoint,
    })
      .then(() => {
        setCanResetToCheckpoint(
          selectedCheckpoint !== checkpoints[checkpoints.length - 1]?.timestamp,
        );
        refreshCheckpoints();
        handleClose();
      });
  };

  const getCheckpointValue = (checkpoint) => {
    const checkpointDate = new Date(Number(checkpoint.timestamp));
    const checkpointDateString = checkpointDate.toLocaleString();
    if (checkpoint.displayName) {
      return `${checkpoint.displayName} - ${checkpointDateString}`;
    }
    return checkpointDateString;
  };

  useEffect(() => {
    setSelectedCheckpoint(checkpoints[0]?.timestamp);
  }, [checkpoints]);

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reset to Checkpoint</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleClose}>
          <Form.Group>
            <Form.Label>Select checkpoint to reset to</Form.Label>
            <Form.Select
              value={selectedCheckpoint}
              onChange={({ target }) => setSelectedCheckpoint(target.value)}
            >
              {
                checkpoints.map((checkpoint) => (
                  <option value={checkpoint.timestamp} key={checkpoint.timestamp}>
                    {getCheckpointValue(checkpoint)}
                  </option>
                ))
              }
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleResetToCheckpoint}>
          Reset to Checkpoint
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetToCheckpointModal.propTypes = {
  checkpoints: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
  })).isRequired,
  show: PropTypes.bool.isRequired,
  refreshCheckpoints: PropTypes.func.isRequired,
  setCanResetToCheckpoint: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default ResetToCheckpointModal;
