import './FormDesigner.css';

import { useContext, useEffect } from 'react';
import AppContext from '../store/context/app-context';

export const FORM_DESIGNER_ELEMENT_ID = 'designer';

function FormDesigner() {
  const {
    activeForm,
    formClient,
    setActiveDesignerElementId,
  } = useContext(AppContext);

  useEffect(() => {
    setActiveDesignerElementId(FORM_DESIGNER_ELEMENT_ID);
    formClient.editForm({
      localReference: activeForm,
      htmlElementId: FORM_DESIGNER_ELEMENT_ID,
    });
  }, [activeForm, formClient, setActiveDesignerElementId]);

  return (
    <div id={FORM_DESIGNER_ELEMENT_ID} className="form-designer" />
  );
}

export default FormDesigner;
