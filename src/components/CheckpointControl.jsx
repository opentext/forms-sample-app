import {
  forwardRef, useContext, useEffect, useImperativeHandle, useState,
} from 'react';
import {
  Button, ButtonGroup, Col, Row,
} from 'react-bootstrap';
import AppContext from '../store/context/app-context';
import SetCheckpointModal from './SetCheckpointModal';
import ResetToCheckpointModal from './ResetToCheckpointModal';

const CheckpointControl = forwardRef((_, ref) => {
  const {
    activeForm,
    formClient,
    refreshCheckpointList,
    setChangesFlagForActiveForm,
  } = useContext(AppContext);
  const [checkpoints, setCheckpoints] = useState([]);
  const [showSetCheckpointModal, setShowSetCheckpointModal] = useState(false);
  const [showResetToCheckpointModal, setShowResetToCheckpointModal] = useState(false);
  const [canSetCheckpoint, setCanSetCheckpoint] = useState(false);
  const [canResetToCheckpoint, setCanResetToCheckpoint] = useState(false);

  const refreshCheckpoints = () => {
    formClient.getFormCheckpoints({ localReference: activeForm })
      .then((formCheckpoints) => {
        setCheckpoints(formCheckpoints);
        setCanSetCheckpoint(false);
      });
    setChangesFlagForActiveForm();
  };

  useImperativeHandle(ref, () => ({
    enableSetCheckPointButton: () => setCanSetCheckpoint(true),
    enableResetToCheckpointButton: () => setCanResetToCheckpoint(true),
    refreshCheckpoints,
  }));

  useEffect(refreshCheckpoints, [activeForm, formClient, refreshCheckpointList]);

  return (
    <Row className="align-items-center">
      <SetCheckpointModal
        show={showSetCheckpointModal}
        refreshCheckpoints={refreshCheckpoints}
        setShow={setShowSetCheckpointModal}
      />
      <ResetToCheckpointModal
        checkpoints={checkpoints}
        show={showResetToCheckpointModal}
        refreshCheckpoints={refreshCheckpoints}
        setCanResetToCheckpoint={setCanResetToCheckpoint}
        setShow={setShowResetToCheckpointModal}
      />
      <Col className="pe-0">
        <h5 className="pt-1">Checkpoint:</h5>
      </Col>
      <Col>
        <ButtonGroup>
          <Button
            disabled={!canSetCheckpoint}
            onClick={() => setShowSetCheckpointModal(true)}
          >
            SET
          </Button>
          <Button
            disabled={!canResetToCheckpoint}
            onClick={() => setShowResetToCheckpointModal(true)}
          >
            RESET
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
});

CheckpointControl.displayName = 'CheckpointControl';

export default CheckpointControl;
