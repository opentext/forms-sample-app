import { useCallback, useEffect, useState } from 'react';
import {
  Col, Container, Form, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { schemaGenerator } from '@opentext/forms-schema-generator';

const withoutSchemaOption = 'Without Schema';
const schemaOption = 'Schema Definition';
const workspaceTypeOption = 'Workspace Type Definition';

function FormSchemaInput({
  schemaDefinition, setSchemaDefinition, setHasSchemaDefinitionBeenModified,
}) {
  const [selectedType, setSelectedType] = useState();
  const [workspaceTypeJson, setWorkspaceTypeJson] = useState('');
  const [schemaJson, setSchemaJson] = useState();
  const [isValid, setIsValid] = useState(true);

  const getErrorMessage = (option, valid) => `${option} is ${valid ? 'required' : 'invalid'}`;

  const isWithoutSchemaOption = useCallback(() => (
    selectedType === withoutSchemaOption
  ), [selectedType]);

  const isSchemaOption = useCallback(() => (
    selectedType === schemaOption
  ), [selectedType]);

  const isWorkspaceTypeOption = useCallback(() => (
    selectedType === workspaceTypeOption
  ), [selectedType]);

  const handleRadioChange = ({ target }) => {
    const { value } = target;
    if (value === withoutSchemaOption) {
      setSchemaDefinition();
    }
    setSelectedType(target.value);
  };

  const handleInvalidSchema = () => {
    setHasSchemaDefinitionBeenModified(false);
    setIsValid(false);
  };

  const handleWorkspaceTypeJsonChange = ({ target }) => {
    const { value } = target;
    setWorkspaceTypeJson(value);
    try {
      JSON.parse(value);
      setSchemaDefinition(schemaGenerator(value));
      setHasSchemaDefinitionBeenModified(true);
      setIsValid(true);
    } catch (err) {
      setSchemaJson('');
      setSchemaDefinition('');
      handleInvalidSchema();
    }
  };

  const handleSchemaJsonChange = ({ target }) => {
    const { value } = target;
    setSchemaJson(value);
    setWorkspaceTypeJson('');
    try {
      setSchemaDefinition(JSON.parse(value));
      setHasSchemaDefinitionBeenModified(true);
      setIsValid(true);
    } catch (err) {
      handleInvalidSchema();
    }
  };

  useEffect(() => {
    if (schemaDefinition && !selectedType) {
      setSelectedType(schemaOption);
    }
  }, [schemaDefinition, selectedType]);

  useEffect(() => {
    if (schemaDefinition) {
      try {
        const schemaDefinitionToString = JSON.stringify(schemaDefinition, null, 2);
        // Only set value of schemaJson to schema if incoming schema is truly different
        if (
          schemaJson === undefined
          ||schemaJson === ''
          || JSON.stringify(JSON.parse(schemaJson), null, 2) !== schemaDefinitionToString
        ) {
          setSchemaJson(schemaDefinitionToString);
        }
      } catch (err) {
        // Do nothing as this only indicates schemaToString is not a valid JSON
      }
    }
  }, [schemaDefinition, schemaJson]);

  return (
    <Form>
      <Container fluid>
        <Row>
          <Form.Group as={Col} md="12">
            <Form.Check
              checked={isWithoutSchemaOption()}
              inline
              label={withoutSchemaOption}
              name="modelTypes"
              type="radio"
              value={withoutSchemaOption}
              onChange={handleRadioChange}
            />
            <Form.Check
              checked={isSchemaOption()}
              inline
              label={schemaOption}
              name="modelTypes"
              type="radio"
              value={schemaOption}
              onChange={handleRadioChange}
            />
            <Form.Check
              checked={isWorkspaceTypeOption()}
              inline
              label={workspaceTypeOption}
              name="modelTypes"
              type="radio"
              value={workspaceTypeOption}
              onChange={handleRadioChange}
            />
          </Form.Group>
        </Row>
        <Row hidden={!selectedType} className="mt-1">
          <Form.Group as={Col} md="6" hidden={!isWorkspaceTypeOption()}>
            <Form.Control
              as="textarea"
              isInvalid={!isValid}
              placeholder={`Enter ${workspaceTypeOption}`}
              required
              rows={22}
              value={workspaceTypeJson}
              onChange={handleWorkspaceTypeJsonChange}
            />
            <Form.Control.Feedback type="invalid">
              {getErrorMessage(workspaceTypeOption, isValid)}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" hidden={isWithoutSchemaOption()}>
            <Form.Control
              as="textarea"
              isInvalid={!isValid}
              placeholder={`${isSchemaOption() ? 'Enter' : 'Generated'} ${schemaOption}`}
              readOnly={selectedType !== schemaOption}
              required
              rows={22}
              value={schemaJson}
              onChange={handleSchemaJsonChange}
            />
            <Form.Control.Feedback type="invalid">
              {getErrorMessage(schemaOption, isValid)}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </Container>
    </Form>
  );
}

FormSchemaInput.propTypes = {
  schemaDefinition: PropTypes.shape({}),
  setSchemaDefinition: PropTypes.func.isRequired,
  setHasSchemaDefinitionBeenModified: PropTypes.func.isRequired,
};

export default FormSchemaInput;
