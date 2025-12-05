import './App.css';

import {
  useContext, useState, useEffect,
  useRef,
} from 'react';
import { useAuth } from 'react-oidc-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormClient } from '@opentext/forms-client';
import { convertStringToNumber } from './utils/string-util';
import AppContext from './store/context/app-context';
import Notification, { notificationTypes } from './components/Notification';
import SpinnerWithMessage from './components/SpinnerWithMessage';
import Header from './components/Header';
import FormListPage from './pages/FormListPage';
import FormDesignPage from './pages/FormDesignPage';
import FormRuntimePage from './pages/FormRuntimePage';

function App() {
  const {
    hideSpinner, showSpinner, setFormClient, showNotification,
  } = useContext(AppContext);
  const {
    isAuthenticated,
    isLoading,
    user,
    signinRedirect,
    signoutRedirect,
  } = useAuth();
  const [email, setEmail] = useState();
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [initializedFormClient, setInitializedFormClient] = useState();
  const isLoggingOutRef = useRef(false);

  useEffect(() => {
    if (isLoading) {
      showSpinner('Loading...');
    } else if (!isAuthenticated) {
      signinRedirect();
      showSpinner('Authenticating...');
    } else if (!isAppLoaded) {
      setEmail(user.profile?.email);
      setIsAppLoaded(true);
      hideSpinner();
    }
  }, [
    hideSpinner,
    isAppLoaded,
    isAuthenticated,
    isLoading,
    showSpinner,
    signinRedirect,
    user,
  ]);

  useEffect(() => {
    if (initializedFormClient && isAuthenticated) {
      if (user?.access_token) {
        initializedFormClient.updateConfig({
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.access_token}`,
          },
          failedAuthenticationCallback: () => {
            signinRedirect();
          },
        });
      } else {
        signinRedirect();
      }
      setFormClient(initializedFormClient);
    }
  }, [initializedFormClient, isAuthenticated, setFormClient, signinRedirect, user]);

  const isLocalFormExists = () => sessionStorage.getItem('hasUnsavedChanges') === 'true';

  const refreshHandler = (event) => {
    const localFormExists = isLocalFormExists();
    // Check if there are any unsaved changes in the local form
    // If there are unsaved changes and
    // The user is not logging out(separate popup has been implemented for logout),
    // Prevent the default refresh action
    if (localFormExists && !isLoggingOutRef.current) {
      event.preventDefault();
      // eslint-disable-next-line no-param-reassign
      event.returnValue = '';
    }
    // If the user is logging out, reset the logging out flag
    if (isLoggingOutRef.current) {
      isLoggingOutRef.current = false;
    }
  };

  const logoutHandler = async () => {
    // Check if there are any unsaved changes in the local form
    if (isLocalFormExists()) {
      // Set a flag to indicate that the user is logging out
      isLoggingOutRef.current = true;
      // eslint-disable-next-line no-restricted-globals, no-alert
      const confirmation = confirm('Changes you made may not be saved. Are you sure you want to logout?');
      // If the user confirms, proceed with the logout process
      if (confirmation) {
        await signoutRedirect();
      }
    } else {
      // If there are no unsaved changes, proceed with the logout process directly
      await signoutRedirect();
    }
  };

  useEffect(() => {
    setInitializedFormClient(new FormClient(
      {
        supportedLocales: process.env.REACT_APP_SUPPORTED_LOCALES.split(','),
        currentLocale: process.env.REACT_APP_CURRENT_LOCALE,
        localizationFolder: './',
      },
      {
        baseUrl: `${process.env.REACT_APP_BASE_SERVICE_URL}/ui`,
        defaultThemeName: process.env.REACT_APP_DEFAULT_THEME_NAME,
        runtimeConfig: {
          controlConfig: {
            dataSource: {
              users: {
                config: {
                  uri: `${process.env.REACT_APP_BASE_SERVICE_URL}/admin/api/v1/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/tenants/${process.env.REACT_APP_TENANT_ID}/users?searchValue=$query`, // $query will be replaced by value given from user control in runtime
                  root: '_embedded.users',
                  id: 'id',
                  idUri: `${process.env.REACT_APP_BASE_SERVICE_URL}/admin/api/v1/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/tenants/${process.env.REACT_APP_TENANT_ID}/users/$query`,
                  name: "firstName & ' ' & lastName",
                  email: 'email',
                },
                errorCallback: (error) => showNotification(error.message, notificationTypes.error),
              },
              groups: {
                config: {
                  uri: `${process.env.REACT_APP_BASE_SERVICE_URL}/admin/api/v1/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/tenants/${process.env.REACT_APP_TENANT_ID}/groups?ignore-case=true&searchValue=$query`, // $query will be replaced by value given from user control in runtime
                  root: '_embedded.groups',
                  id: 'id',
                  idUri: `${process.env.REACT_APP_BASE_SERVICE_URL}/admin/api/v1/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/tenants/${process.env.REACT_APP_TENANT_ID}/groups/$query`,
                  groupName: 'name',
                  groupTitle: 'description',
                },
                errorCallback: (error) => showNotification(error.message, notificationTypes.error),
              },
            },
          },
        // Enable this to add external data to dropdowns in runtime
          // beforeOpenDropdownInterceptor: async (propertyPath, itemId) => {
          //   const data = {
          //     otOptions: [
          //       { text: 'Korean', value: 'kr' },
          //       { text: 'Spanish', value: 'es' },
          //     ],
          //   };
          //  return data;
          // },
        },
        designConfig: {
          autoSave: process.env.REACT_APP_AUTO_SAVE !== 'false',
          formCheckpointCount:
            convertStringToNumber(process.env.REACT_APP_FORM_CHECKPOINT_COUNT, 1),
        },
        onErrorCallback: (error) => {
          if (error.message) {
            showNotification(error.message, notificationTypes.error);
          }
        },
      },
    ));
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', refreshHandler);
    return () => {
      window.removeEventListener('beforeunload', refreshHandler);
    };
  }, []);

  return (
    <>
      <Notification />
      {/* Only show header when authenticated */}
      {isAuthenticated && <Header email={email} onLogout={logoutHandler} />}
      <SpinnerWithMessage />
      <div className="app" hidden={!isAuthenticated}>
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
          <Routes>
            <Route path="/" element={<FormListPage />} />
            <Route path="/edit" element={<FormDesignPage />} />
            <Route path="/runtime" element={<FormRuntimePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
