/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  createRef, useEffect, useRef, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  Col, Container, Row,
} from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';
import Toolbar from '../components/Toolbar';
import ThemeSelect from '../components/ThemeSelect';
import RuntimeFormInfo, { runtimeFormInfoTabs } from '../components/RuntimeFormInfo';
import FormRuntime from '../components/FormRuntime';
import FormActionDispatcher from '../components/FormActionDispatcher';
import LocaleSelect from '../components/LocaleSelect';

function FormRuntimePage() {
  const [runtimeActiveAccordionKey, setRuntimeActiveAccordionKey] = useState(0);
  const navigate = useNavigate();

  const [formsCount, setFormsCount] = useState(0);
  const [formsInfo, setFormsInfo] = useState([
    {
      runtimeId: uuidV4(),
      activeTab: runtimeFormInfoTabs.formData,
      runtimeFormInfoRef: useRef(),
    },
  ]);

  const handleAddFormInstance = () => {
    if (formsCount < process.env.REACT_APP_MAXIMUM_MULTIPLE_FORMS) {
      setFormsCount((prevCount) => prevCount + 1);
    }
  };

  const setActiveTab = (tab, index) => {
    setFormsInfo((prev) => {
      if (prev[index].activeTab === tab) return prev; // 🛡️ avoid unnecessary updates
      const updated = [...prev];
      updated[index] = { ...updated[index], activeTab: tab };
      return updated;
    });
  };

  useEffect(() => {
    if (formsInfo.length < formsCount + 1
      && formsCount < process.env.REACT_APP_MAXIMUM_MULTIPLE_FORMS) {
      const newRef = createRef();
      // runtimeFormInfoRefs.current.push(newRef);
      setFormsInfo((prevFormsInfo) => [...prevFormsInfo, {
        runtimeId: uuidV4(),
        activeTab: runtimeFormInfoTabs.formData,
        runtimeFormInfoRef: newRef,
      }]);
      setRuntimeActiveAccordionKey(formsCount);
    }
  }, [formsCount, formsInfo.length]);

  return (
    <>
      <Toolbar
        title="Run Form"
        buttons={[
          {
            label: 'BACK',
            onClick: () => navigate(-1),
          },
          {
            label: 'ADD FORM INSTANCE',
            disabled: formsCount >= process.env.REACT_APP_MAXIMUM_MULTIPLE_FORMS,
            onClick: () => {
              handleAddFormInstance();
            },
          },
          {
            label: 'VALIDATE FORM DATA',
            disabled: !formsInfo[runtimeActiveAccordionKey],
            onClick: () => {
              const { runtimeFormInfoRef } = formsInfo[runtimeActiveAccordionKey];
              runtimeFormInfoRef.current.validateFormData();
              setActiveTab(runtimeFormInfoTabs.validationErrors, runtimeActiveAccordionKey);
            },
          },
        ]}
      >
        <FormActionDispatcher />
      </Toolbar>
      <Container fluid>
        <Accordion
          activeKey={runtimeActiveAccordionKey}
          onSelect={(key) => setRuntimeActiveAccordionKey(key)}
        >
          { formsInfo && formsInfo.map((form, index) => (
            <Accordion.Item eventKey={index} key={form.runtimeId}>
              <Accordion.Header>
                Form #
                {index + 1}
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={3} />
                  <Col md={3}>
                    <ThemeSelect runtimeElementId={form.runtimeId} updateDefaultTheme={false} />
                  </Col>
                  <Col md={3}>
                    <LocaleSelect
                      runtimeElementId={form.runtimeId}
                    />
                  </Col>
                  <Col md={3} />
                </Row>
                <Row>
                  <Col md={9}>
                    <FormRuntime
                      runtimeElementId={form.runtimeId}
                      runtimeFormInfoRef={form.runtimeFormInfoRef}
                    />
                  </Col>
                  <Col md={3}>
                    <RuntimeFormInfo
                      ref={form.runtimeFormInfoRef}
                      activeTab={form.activeTab}
                      runtimeElementId={form.runtimeId}
                      onTabSelect={(selectedTab) => {
                        setActiveTab(selectedTab, index);
                      }}
                    />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          )) }
        </Accordion>
      </Container>
    </>
  );
}

export default FormRuntimePage;
