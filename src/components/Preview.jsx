import './Preview.css';

import {
  useContext, useEffect, useRef, useState,
} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SplitPane, { Pane } from 'split-pane-react';
import AppContext from '../store/context/app-context';

export const PREVIEW_ELEMENT_ID = 'preview';

function Preview() {
  const {
    activeForm,
    activeRuntime,
    formClient,
    isFormDesignChanged,
    setActiveRuntime,
    setIsFormDesignChanged,
    showNotification,
  } = useContext(AppContext);
  const [sizes, setSizes] = useState(['260px', 'auto', '260px']);
  const formChanged = useRef(isFormDesignChanged);

  useEffect(() => {
    formClient.renderForm(
      {
        localReference: activeForm,
        htmlElementId: PREVIEW_ELEMENT_ID,
        useFormLocale: true,
        formData: formChanged.current ? {} : undefined,
        runtimeInstanceId: formChanged.current || !activeRuntime ? undefined : activeRuntime,
      },
    ).then((runtimeInstanceId) => {
      setActiveRuntime(runtimeInstanceId);
    });
    if (formChanged.current) {
      setIsFormDesignChanged(false);
      formChanged.current = false;
    }
  }, [activeForm,
    activeRuntime,
    formClient,
    setActiveRuntime,
    setIsFormDesignChanged,
    showNotification]);

  return (
    <Container fluid>
      <Row>
        <Col className="preview-peripheral-area preview-top-margin" />
      </Row>
      <Row>
        <Col className="split-pane-container p-0">
          <SplitPane
            split="vertical"
            sizes={sizes}
            onChange={setSizes}
          >
            <Pane minSize={50} maxSize="50%">
              <div className="preview-peripheral-area preview-left-pane" />
            </Pane>
            <div id={PREVIEW_ELEMENT_ID} className="preview" />
            <Pane minSize={50} maxSize="50%">
              <div className="preview-peripheral-area preview-right-pane" />
            </Pane>
          </SplitPane>
        </Col>
      </Row>
    </Container>
  );
}

export default Preview;
