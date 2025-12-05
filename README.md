## Getting Started

### Installing dependencies

Run "npm install" on the application root folder. This will install the dependencies (including React) in the main directory.

### Setting application configuration variables

Configure the respective values for the following properties in the .env file:
```text
HTTPS=<whether to use HTTPS, e.g.: true>
PORT=<port number, e.g.: 3000>
REACT_APP_BASE_SERVICE_URL=<base service URL, e.g.: https://us.api.opentext.com>
REACT_APP_TENANT_ID=<tenant ID, refer to step 2 in the Admin Center section below>
REACT_APP_CLIENT_ID=<client ID, refer ot step 6 in the Admin Center section below>
REACT_APP_REDIRECT_URI=<redirect URI for authentication, e.g.: https://localhost:3000>
REACT_APP_AUTO_SAVE=<whether to save automatically in browser storage when designing a form, e.g.: true>
REACT_APP_CURRENT_LOCALE=<current user interface locale, e.g.: en>
REACT_APP_SUPPORTED_LOCALES=<locales supported by the application, e.g.: en,ja,de,fr,es,nl,it,pt,pl,cs,da,fi,ko,nb,sv,tr>
REACT_APP_GRID_COLUMN_COUNT=<amount of columns in the form design canvas, e.g.: 4>
REACT_APP_FORM_COLUMN_COUNT=<amount of columns to use when generating controls on the form, e.g.: 2>
REACT_APP_FORM_CHECKPOINT_COUNT=<when autosave is not turned on, the amount of check points or save slots you can manually save to before overwriting the oldest save>
REACT_APP_DEFAULT_THEME_NAME=<the default theme name to use when designing a form, e.g.: JATOLight>
REACT_APP_VALIDATE_MISSING_FIELDS=<whether to validate properties that are not on the form (i.e., missing), but are in the schema (data model definition) passed to the form>
REACT_APP_MAXIMUM_MULTIPLE_FORMS=<maximum allowed number of form instances that can run at the same time>
REACT_APP_ORGANIZATION_ID=<the organization id (availabie in Admin Center) for the developer organization; this is needed to populate the user control when running the form/UI>
REACT_APP_APP_ID=<the app id (availabie in Admin Center under the organization view app management section) for the application; this is needed to populate the user control when running the form/UI>
```

### Admin Center

Make sure you have a valid subscription to the Thrust Services developer plan (trial or paid). This will provide you with access to the Admin Center (Console tab) when singin in to developer.opentext.com. To create the App in Admin Center required for this sample application to work, follow the steps below.

Step 1: Sign in to developer.opentext.com and open the organization view for your developer organization.

Step 2: Open the tenants view and click on the tenant you want to use for your application to navigate to the tenant overview section and select to see the tenant information. Copy the **Tenant Id** value to the property **REACT_APP_TENANT_ID** in the .env file, e.g.:
```
REACT_APP_TENANT_ID=b9c156c5-3292-4bad-b5ca-cb245c4c3873
```

Step 3: Back in the organization view, go to the **Apps** section under **App management**. Click on the **Add** button to create a new app and provide the required details (display name, app name, version, description), and select the tenant from the previous step. For display name, app name, and description you can e.g. use 'Forms Sample App'.

Step 4: Open the app you just created and navigate to the **Service clients** section in the application view.

Step 5: Select to **Manage redirect URLs** for the **Public** service client, and add the **Redirect URL** that is filled as the **REACT_APP_REDIRECT_URI** in the .env file, e.g.:
```
REACT_APP_REDIRECT_URI=https://localhost:3000
```

Step 6: Copy the Client ID of the **Public** service client to the property **REACT_APP_CLIENT_ID** in the .env file, e.g.:
```
REACT_APP_CLIENT_ID=3E5fFLQ3qPDGjv9l9rkKS1nmPkc3fVf6
```

## How to Run the Application

Run "npm start" which will open [https://localhost:3000](https://localhost:3000) in your browser.

### About the application

This application is to demonstrate how OpenText™ Forms - Thrust API (or Forms API for short) can be integrated into a host (web) application.

Forms API allows users to design, create, and manage forms or other UI components using JSON schemas and form/UI design definitions, which can be edited in the Forms API UI Designer.

The designed forms can also be utilized at runtime within the application through the Forms API UI Runtime.

For more information on Forms API, please refer to the product documentation at [https://developer.opentext.com/services/products/forms-service](https://developer.opentext.com/services/products/forms-service).

### Prerequisite

As part of the Forms API product, we provide a schema generator library that allows generating a Forms API compatible JSON schema from another model/data definition. This schema generator allows generating a schema from a Core Content Workspace Type JSON (you can export such a Workspace Type JSON from Core Content). As a prerequisite for testing the schema generation from a Workspace Type Definition, the user should have their own Workspace Type Definition. Alternatively, they can also create their own Forms API JSON schema as explained [here](https://developer.opentext.com/services/products/forms-service/documentation/forms-javascript-api/3).

### Create a new form

Step 1: Select 'Create' and enter the metadata ensuring that the combination of namespace and name does not yet exist, as it has to be unique in the context of the configured tenant and client_id (i.e., app).

Step 2: After filling the metadata, select whether to create the form/UI 'Without Schema', or to use a (JSON) 'Schema Definition', or to provide a Core Content 'Workspace Type Definition'.

Step 3: If Workspace Type Definition is selected then sample app will generate the corresponding schema for the Workspace Type JSON.

Step 4: Once the option selected and, if applicable, the schema entered, click on 'Create Form'.

Step 5: From the 'Local Forms' list, select the newly created form and click 'Design' to open it for editing.

Step 6: You can always return to the 'Local and Remote Forms' view by clicking the 'Back' button. This lets you select other forms or adjust the 'Designer Config' setting, providing the UI Designer view with an updated configuration and new features to explore. Feel free to experiment by switching between various UI Designer configurations to see the range of available features.

### Save and edit the existing form

Step 1: Edit the form in the UI designer by modifying the layout of the controls on the canvas (center pane), adding controls from the control palette (left pane), or modifying the control properties (right pane) for a selected control.

Step 2: Once done editing, click 'Save' to persist the form/UI design to the Forms API form repository (hosted on the OpenText Cloud Platform).

Step 3: The form is now saved in 'Draft' state, and it can be published by clicking the 'Publish' button.

Step 4: Once the form is published, other users will be able to view the runtime form. Forms in 'Published' state cannot be edited further, instead a new (Draft) version will be created if the form is modified by the owner/author.

### Use the runtime form

Step 1: Click 'Run' to use the runtime version of the saved form.

Step 2: In the runtime view, enter data into the runtime form.

Step 3: View the form data in the 'Form Data' tab. Thanks to the event handler (callback function) that traps form data changes, the content of this tab will update when you make changes in the form.

Step 4: The runtime form has inline data validation based on schema constraints.

Step 5: Beyond inline validation errors, click 'Validate Form Data' to see all validation errors under the 'Validation Errors' tab.

Step 6: If during the editing of the form you decided to remove a field from the form that was part of the schema, this will be considered to be a missing field. The list of missing fields is available under the 'Missing Fields' tab.

Step 7: From the toolbar, the 'Form action' section allows pushing changes (aka actions) to the form by selecting a field and an action, and clicking 'Submit action'.

### Further experimenting and exploring the sample app code

To deepen your understanding of Forms API, we recommend exploring and experimenting with the Forms Sample App code. This sample application provides a comprehensive look at Forms API's capabilities, demonstrating how various form components, configuration options, and UI Designer features come together in a fully functional app. By reviewing the code and modifying it according to your needs, you will gain practical insights into best practices for implementing forms and UI components. Try adjusting configurations, adding new features, and ensuring you test all application functionality to see how the application behaves. This hands-on approach will enhance your familiarity with Forms API and empower you to create your own more complex, customized applications.

For additional guidance, combine your experimentation with exploring the [product documentation](https://developer.opentext.com/services/products/forms-service), which offers further details on OpenText™ Forms - Thrust API features and usage tips.

