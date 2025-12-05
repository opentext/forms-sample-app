import { useContext, useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';

function LocaleSelect({ designerElementId = '', runtimeElementId = '' }) {
  const [locales, setLocales] = useState([]);
  const { formClient } = useContext(AppContext);
  const [currentLocale, setCurrentLocale] = useState(process.env.REACT_APP_CURRENT_LOCALE);

  useEffect(() => {
    const languageNames = new Intl.DisplayNames([currentLocale], {
      type: 'language',
    });
    const supportedLocales = process.env.REACT_APP_SUPPORTED_LOCALES.split(',');
    const options = supportedLocales.map((locale) => ({
      label: languageNames.of(locale),
      value: locale,
    }));
    setLocales(options);
  }, [currentLocale, formClient]);

  const handleOnChangeLocale = (event) => {
    const newLocale = event.target.value;
    setCurrentLocale(newLocale);
    if (designerElementId) {
      formClient.setDesignerLocale({ htmlElementId: designerElementId, locale: newLocale });
    }
    if (runtimeElementId) {
      formClient.setRuntimeLocale({ htmlElementId: runtimeElementId, locale: newLocale });
    }
  };

  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>Locale</InputGroup.Text>
        <Form.Select
          onChange={handleOnChangeLocale}
          value={currentLocale}
        >
          <option value={navigator.language} key={navigator.language}>
            Browser
          </option>
          {
            locales && Array.isArray(locales) && locales.map((locale) => (
              <option value={locale.value} key={locale.value}>
                {locale.label}
              </option>
            ))
          }
        </Form.Select>
      </InputGroup>
    </Form>
  );
}

LocaleSelect.propTypes = {
  designerElementId: PropTypes.string,
  runtimeElementId: PropTypes.string,
};

export default LocaleSelect;
