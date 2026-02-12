import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { FormClient } from '@opentext/forms-client';
import AppContext from './app-context';

function AppContextProvider({ children }) {
  const [activeForm, setActiveForm] = useState(() => sessionStorage.getItem('activeForm') || '');
  const [activeRuntime, setActiveRuntime] = useState(() => sessionStorage.getItem('activeRuntime') || '');
  const [activeThemes, setActiveThemes] = useState(() => JSON.parse(sessionStorage.getItem('activeThemes') || '{}'));
  const [formClient, setFormClient] = useState(() => {
    const formClientSessionStorage = sessionStorage.getItem('formClient');
    if (formClientSessionStorage) {
      const storedFormClient = JSON.parse(formClientSessionStorage);
      return new FormClient(
        storedFormClient.localeDefinition,
        storedFormClient.config,
      );
    }
    return undefined;
  });
  const [selectedDesignerConfig, setSelectedDesignerConfig] = useState(() => sessionStorage.getItem('selectedDesignerConfig') || '');
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [notificationProps, setNotificationProps] = useState({ message: '', type: '' });
  const [spinnerMessage, setSpinnerMessage] = useState('');
  const [unsavedLocalForms, setUnsavedLocalForms] = useState(() => JSON.parse(sessionStorage.getItem('unsavedLocalForms')) || []);
  const [refreshLocalList, setRefreshLocalList] = useState(0);
  const [refreshRemoteList, setRefreshRemoteList] = useState(0);
  const [refreshCheckpointList, setRefreshCheckpointList] = useState(0);
  const [isFormDesignChanged, setIsFormDesignChanged] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(process.env.REACT_APP_CURRENT_LOCALE);
  const [activeDesignerElementId, setActiveDesignerElementId] = useState('');
  const [activePreviewRuntimeElementId, setActivePreviewRuntimeElementId] = useState('');
  const [activeRuntimeElementIds, setActiveRuntimeElementIds] = useState([]);

  const hideSpinner = () => {
    setIsSpinnerVisible(false);
    setSpinnerMessage('');
  };

  const showSpinner = (message) => {
    setSpinnerMessage(message);
    setIsSpinnerVisible(true);
  };

  const showNotification = useCallback((message, type) => (
    setNotificationProps({ message, type })
  ), [setNotificationProps]);

  const setIsUnsaved = (localReference, isUnsaved) => {
    if (isUnsaved) {
      setUnsavedLocalForms((prevItems) => {
        const exists = prevItems.some((item) => item === localReference);
        return exists ? prevItems : [...prevItems, localReference];
      });
    } else {
      setUnsavedLocalForms((prevItems) => prevItems.filter((item) => item !== localReference));
    }
  };

  const isUnsaved = useCallback((localReference) => (
    unsavedLocalForms.includes(localReference)
  ), [unsavedLocalForms]);

  const setUnsavedChangesFlag = (value) => {
    const UNSAVED_CHANGES_FLAG_KEY = 'hasUnsavedChanges';
    sessionStorage.setItem(UNSAVED_CHANGES_FLAG_KEY, value);
  };

  const setChangesFlagForActiveForm = useCallback(() => {
    if (activeForm && formClient) {
      formClient?.hasFormUnsavedChanges({ localReference: activeForm })
        .then((value) => setUnsavedChangesFlag(value));
    }
  }, [activeForm, formClient]);

  const addRuntimeElementId = useCallback((id) => {
    setActiveRuntimeElementIds((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }, []);

  const removeRuntimeElementId = useCallback((id) => {
    setActiveRuntimeElementIds((prev) => prev.filter((elementId) => elementId !== id));
  }, []);

  /* Store context elements that should persist across screens in session storage
  to ensure they don't get lost as long as the browser session is active */
  useEffect(() => {
    if (activeForm) {
      sessionStorage.setItem('activeForm', activeForm);
    } else {
      sessionStorage.removeItem('activeForm');
    }
  }, [activeForm]);

  useEffect(() => {
    if (formClient) {
      sessionStorage.setItem('formClient', JSON.stringify(formClient));
    } else {
      sessionStorage.removeItem('formClient');
    }
  }, [formClient]);

  useEffect(() => {
    if (selectedDesignerConfig) {
      sessionStorage.setItem('selectedDesignerConfig', selectedDesignerConfig);
    } else {
      sessionStorage.removeItem('selectedDesignerConfig');
    }
  }, [selectedDesignerConfig]);

  useEffect(() => {
    if (unsavedLocalForms) {
      sessionStorage.setItem('unsavedLocalForms', JSON.stringify(unsavedLocalForms));
    } else {
      sessionStorage.removeItem('unsavedLocalForms');
    }
  }, [unsavedLocalForms]);

  useEffect(() => {
    if (activeThemes) {
      sessionStorage.setItem('activeThemes', JSON.stringify(activeThemes));
      formClient?.updateConfig({
        themes: Object.keys(activeThemes).length > 0 ? activeThemes : null,
      });
    } else {
      sessionStorage.removeItem('activeThemes');
    }
  }, [activeThemes, formClient]);

  const value = useMemo(() => (
    {
      activeForm,
      activeRuntime,
      activeThemes,
      formClient,
      isSpinnerVisible,
      isUpdated,
      notificationProps,
      refreshLocalList,
      refreshRemoteList,
      refreshCheckpointList,
      selectedDesignerConfig,
      spinnerMessage,
      isFormDesignChanged,
      currentLocale,
      activeDesignerElementId,
      activePreviewRuntimeElementId,
      activeRuntimeElementIds,
      hideSpinner,
      isUnsaved,
      setActiveForm,
      setActiveRuntime,
      setActiveThemes,
      setFormClient,
      setUnsavedChangesFlag,
      setChangesFlagForActiveForm,
      setIsUnsaved,
      setIsUpdated,
      setRefreshLocalList,
      setRefreshRemoteList,
      setRefreshCheckpointList,
      showNotification,
      setSelectedDesignerConfig,
      showSpinner,
      setIsFormDesignChanged,
      setCurrentLocale,
      setActiveDesignerElementId,
      setActivePreviewRuntimeElementId,
      setActiveRuntimeElementIds,
      addRuntimeElementId,
      removeRuntimeElementId,
    }
  ), [
    activeForm,
    activeRuntime,
    activeThemes,
    formClient,
    isSpinnerVisible,
    isUpdated,
    notificationProps,
    refreshLocalList,
    refreshRemoteList,
    refreshCheckpointList,
    selectedDesignerConfig,
    spinnerMessage,
    isFormDesignChanged,
    currentLocale,
    activeDesignerElementId,
    activePreviewRuntimeElementId,
    activeRuntimeElementIds,
    isUnsaved,
    showNotification,
    setChangesFlagForActiveForm,
    addRuntimeElementId,
    removeRuntimeElementId,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppContextProvider;
