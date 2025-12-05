import { useContext, useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';

function ThemeSelect({ designerElementId = '', runtimeElementId = '', updateDefaultTheme = true }) {
  const [themes, setThemes] = useState({});
  const [themeName, setThemeName] = useState('');
  const { formClient, activeThemes } = useContext(AppContext);

  useEffect(() => {
    formClient?.updateConfig({
      themes: Object.keys(activeThemes).length > 0 ? activeThemes : null,
    });
    setThemes(formClient.getSupportedThemes());
    setThemeName(formClient.getConfig().defaultThemeName);
  }, [formClient, activeThemes]);

  const handleOnChangeThemeName = async (event) => {
    const newThemeName = event.target.value;
    setThemeName(newThemeName);
    if (updateDefaultTheme) {
      formClient.updateConfig({ defaultThemeName: newThemeName });
    }
    if (designerElementId) {
      await formClient
        .setDesignerTheme({ htmlElementId: designerElementId, themeName: newThemeName });
    }
    if (runtimeElementId) {
      await formClient
        .setRuntimeTheme({ htmlElementId: runtimeElementId, themeName: newThemeName });
    }
  };

  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>Theme</InputGroup.Text>
        <Form.Select
          onChange={handleOnChangeThemeName}
          value={themeName}
        >
          {
            Object.entries(themes).map((theme) => (
              <option value={theme[0]} key={theme[0]}>
                {theme[1].label.en}
              </option>
            ))
          }
        </Form.Select>
      </InputGroup>
    </Form>
  );
}

ThemeSelect.propTypes = {
  designerElementId: PropTypes.string,
  runtimeElementId: PropTypes.string,
  updateDefaultTheme: PropTypes.bool,
};

export default ThemeSelect;
