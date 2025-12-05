import { useContext, useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import AppContext from '../store/context/app-context';

function FormActionDispatcher() {
  const { activeForm, formClient } = useContext(AppContext);
  const [fields, setFields] = useState([]);
  const [actions, setActions] = useState({});
  const [selectedField, setSelectedField] = useState();
  const [selectedAction, setSelectedAction] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handlePropertyPathSelection = ({ target }) => {
    setSelectedField(target.value);
  };

  const handleActionSelection = ({ target }) => {
    const { value } = target;
    if (value !== 'validate') {
      setErrorMessage('');
    }
    setSelectedAction(value);
  };

  const handleErrorMessage = ({ target }) => {
    setErrorMessage(target.value);
  };

  const submitFormAction = async () => {
    formClient.dispatchFormAction(({
      localReference: activeForm,
      type: selectedAction,
      propertyPath: selectedField,
      errorMessage,
    }));
  };

  useEffect(() => {
    formClient.getIncludedFields({ localReference: activeForm })
      .then(({ includedFields }) => setFields(includedFields));
  }, [activeForm, formClient]);

  useEffect(() => {
    setActions(formClient.getSupportedFormActions());
  }, [formClient]);

  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>Form Action</InputGroup.Text>
        <Form.Select
          onChange={handlePropertyPathSelection}
          value={selectedField}
        >
          <option value="">Select field</option>
          {
            fields.map((field) => (
              <option key={field.propertyName} value={field.propertyName}>
                {field.propertyValue.title ?? field.propertyName}
              </option>
            ))
          }
        </Form.Select>
        <Form.Select
          onChange={handleActionSelection}
          value={selectedAction}
          disabled={!selectedField}
        >
          <option value="">Select action</option>
          {
            Object.entries(actions).map((action) => (
              <option key={action[0]} value={action[0]}>
                {action[1].label.en ?? action[0]}
              </option>
            ))
          }
        </Form.Select>
        <Form.Control
          onChange={handleErrorMessage}
          value={errorMessage}
          disabled={selectedAction !== 'validate' && selectedField}
        />
        <Button
          color="primary"
          onClick={submitFormAction}
          disabled={
            !(selectedField && selectedAction)
            || (selectedField && selectedAction === 'validate' && errorMessage === '')
          }
        >
          Submit action
        </Button>
      </InputGroup>
    </Form>
  );
}

export default FormActionDispatcher;
