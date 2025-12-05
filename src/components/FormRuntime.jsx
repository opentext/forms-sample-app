import './FormRuntime.css';

import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';

function FormRuntime({
  runtimeFormInfoRef, runtimeElementId,
}) {
  const {
    activeForm,
    formClient,
    showNotification,
  } = useContext(AppContext);

  useEffect(() => {
    // Set error handler for users (for user control) data source

    /* REMARK: in this sample app we are passing one single htmlElementId
    as there is only one active runtime form.
    However, you could decide to launch multiple forms at once passing different
    htmlElementId values to differeent renderForm calls. */
    async function renderForm() {
      await formClient.renderForm(
        {
          localReference: activeForm,
          htmlElementId: runtimeElementId,
          formData: {},
        },
      ).then(() => {
        formClient.getFormData({
          htmlElementId: runtimeElementId,
          validateMissingFields: process.env.REACT_APP_VALIDATE_MISSING_FIELDS !== 'false',
          triggerFormValidation: false,
        }).then(({ formData }) => {
          if (runtimeFormInfoRef.current && runtimeFormInfoRef.current.setInitialFormData) {
            runtimeFormInfoRef.current.setInitialFormData(formData);
          }
        });
      });
    }
    renderForm();
  }, [activeForm,
    formClient,
    runtimeFormInfoRef,
    showNotification,
    runtimeElementId]);

  return (
    <div id={runtimeElementId} className="form-runtime" />
  );
}

FormRuntime.propTypes = {
  runtimeFormInfoRef: PropTypes.shape({
    current: PropTypes.shape({
      setInitialFormData: PropTypes.func,
    }),
  }).isRequired,
  runtimeElementId: PropTypes.string,
};

export default FormRuntime;
