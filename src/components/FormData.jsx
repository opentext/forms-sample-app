import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';

const FormData = forwardRef(({ validationErrorsRef, runtimeElementId }, ref) => {
  const { formClient } = useContext(AppContext);
  const [formDataString, setFormDataString] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [keepCurrentFormData, setKeepCurrentFormData] = useState(true);
  const [ignoreSchemaDefaults, setIgnoreSchemaDefaults] = useState(true);

  const handleSetFormData = async () => {
    try {
      await formClient.setFormData({
        htmlElementId: runtimeElementId,
        formData: JSON.parse(formDataString),
        keepCurrentFormData,
        ignoreSchemaDefaults,
      });
      setIsEditMode(false);
    } catch (e) {
      setIsValid(false);
    }
  };

  const handleFormdataStringChange = ({ target }) => {
    const { value } = target;
    setFormDataString(value);
    try {
      JSON.parse(value);
      setIsValid(true);
    } catch (err) {
      setIsValid(false);
    }
  };

  const handleKeepCurrentFormDataChange = ({ target }) => {
    setKeepCurrentFormData(target.checked);
  };

  const handleIgnoreSchemaDefaultsChange = ({ target }) => {
    setIgnoreSchemaDefaults(target.checked);
  };

  useImperativeHandle(ref, () => ({
    setInitialFormData: async (formData) => {
      setFormDataString(JSON.stringify(formData, null, 2));
      setIsEditMode(false);
      setIsValid(true);
    },
  }));

  useEffect(() => {
    // Sets the callback which will be triggered on every change to the form data
    formClient.updateConfig({
      runtimeConfig: {
        afterFormDataChangeCallback: () => {
          formClient
            .getFormData({
              htmlElementId: runtimeElementId,
              validateMissingFields:
                process.env.REACT_APP_VALIDATE_MISSING_FIELDS !== 'false',
              triggerFormValidation: true,
            })
            .then(({ formData, problems }) => {
              setFormDataString(JSON.stringify(formData, null, 2));
              setIsEditMode(false);
              setIsValid(true);
              if (
                validationErrorsRef.current
                && validationErrorsRef.current.setProblems
              ) {
                validationErrorsRef.current.setProblems(problems);
              }
            });
        },
        afterPressCallback: (name, tagName) => {
          console.log({
            name,
            tagName,
          });
        },
        afterAddRowCallback: (propertyPath, controlHTMLElementId, rowId) => {
          console.log({
            propertyPath,
            controlHTMLElementId,
            rowId,
          });
        },
        afterDeleteRowCallback: (propertyPath, controlHTMLElementId, rowId) => {
          console.log({
            propertyPath,
            controlHTMLElementId,
            rowId,
          });
        },
      },
    });
  }, [formClient, runtimeElementId, validationErrorsRef]);

  return (
    <>
      <ButtonGroup className="ms-2 my-1">
        <Button onClick={() => setIsEditMode(true)} disabled={isEditMode}>
          Edit
        </Button>
        <Button
          color="primary"
          onClick={handleSetFormData}
          disabled={!isEditMode || !isValid}
        >
          Set
        </Button>
      </ButtonGroup>
      <Form className="m-2">
        <Form.Group>
          <Form.Control
            as="textarea"
            disabled={!isEditMode}
            isInvalid={!isValid}
            rows={26}
            value={formDataString}
            onChange={handleFormdataStringChange}
          />
          <Form.Control.Feedback type="invalid">
            Invalid Form Data JSON
          </Form.Control.Feedback>
          <Form.Check
            type="checkbox"
            label="Keep current form data"
            checked={keepCurrentFormData}
            onChange={handleKeepCurrentFormDataChange}
          />
          <Form.Check
            type="checkbox"
            label="Ignore schema defaults"
            checked={ignoreSchemaDefaults}
            onChange={handleIgnoreSchemaDefaultsChange}
          />
        </Form.Group>
      </Form>
    </>
  );
});

FormData.displayName = 'FormData';

FormData.propTypes = {
  validationErrorsRef: PropTypes.shape({
    current: PropTypes.shape({
      setProblems: PropTypes.func,
    }),
  }).isRequired,
  runtimeElementId: PropTypes.string,
};

export default FormData;
