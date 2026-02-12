import { useContext, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';
import { DesignerConfigNames, getDesignerConfig } from '../config/designer-config';

function DesignerConfigPicker({ disabled = false }) {
  const { formClient, selectedDesignerConfig, setSelectedDesignerConfig } = useContext(AppContext);

  const handleConfigChange = async ({ target }) => {
    const { value } = target;
    setSelectedDesignerConfig(value);
  };

  useEffect(() => {
    if (formClient) {
      const formClientConfig = formClient.getConfig();
      formClientConfig.designConfig.designerConfig = getDesignerConfig(
        selectedDesignerConfig || DesignerConfigNames.default,
      );
      formClient.updateConfig(formClientConfig);
    }
  }, [formClient, selectedDesignerConfig]);

  return (
    <Form className="d-flex align-items-center">
      <InputGroup>
        <InputGroup.Text>Designer Config</InputGroup.Text>
        <Form.Select
          onChange={handleConfigChange}
          value={selectedDesignerConfig || DesignerConfigNames.default}
          disabled={disabled}
        >
          <option value={DesignerConfigNames.default}>Default</option>
          <option value={DesignerConfigNames.earlyAccess}>Early access</option>
          <option value={DesignerConfigNames.simpleNoModel}>Simple - no model</option>
          <option value={DesignerConfigNames.simpleOnlyModel}>Simple - only model</option>
        </Form.Select>
      </InputGroup>
    </Form>
  );
}

DesignerConfigPicker.propTypes = {
  disabled: PropTypes.bool,
};

export default DesignerConfigPicker;
