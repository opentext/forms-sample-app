import { useEffect, useState } from 'react';
import {
  Col, Container, Form, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function FormMetadataInput({
  isCreate, alreadyExists, metadata, localAcls, onMetadataModified, onFormIdentifierChanged,
}) {
  const [metadataInputValues, setMetadataInputValues] = useState({
    namespace: '',
    displayName: '',
    name: '',
    description: '',
    versionLabels: '',
    aclLocalReference: '',
  });
  const [validated, setValidated] = useState(false);

  const formatToLowercaseAndUnderscores = (toFormat) => toFormat.normalize('NFD') // decompose combined graphemes
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9_]/g, '_') // convert all non-alphanumeric characters to underscores
    .trim();

  const formatPropertyValue = (unformattedPropertyValue) => {
    if (unformattedPropertyValue && unformattedPropertyValue !== '') {
      return formatToLowercaseAndUnderscores(unformattedPropertyValue);
    }
    return unformattedPropertyValue;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetadataInputValues({
      ...metadataInputValues,
      [name]: value.trimStart(),
    });
  };

  const handleValueEntered = (e) => {
    const { name } = e.target;

    const modifiedMetadata = {
      namespace: metadataInputValues.namespace,
      displayName: metadataInputValues.displayName,
      name: metadataInputValues.name,
      description: metadataInputValues.description,
      versionLabels: metadataInputValues.versionLabels,
      aclLocalReference: metadataInputValues.aclLocalReference,
    };

    if (modifiedMetadata[name] === metadata[name]) {
      return;
    }

    switch (name) {
      case 'namespace':
        modifiedMetadata.namespace = formatPropertyValue(modifiedMetadata.namespace);
        setMetadataInputValues({
          ...metadataInputValues,
          namespace: modifiedMetadata.namespace,
        });
        if (modifiedMetadata.name) {
          onFormIdentifierChanged();
        }
        break;
      case 'displayName':
        if (!modifiedMetadata.name) {
          modifiedMetadata.name = formatPropertyValue(modifiedMetadata.displayName);
          setMetadataInputValues({
            ...metadataInputValues,
            name: modifiedMetadata.name,
          });
        }
        break;
      case 'name':
        modifiedMetadata.name = formatPropertyValue(modifiedMetadata.name);
        setMetadataInputValues({
          ...metadataInputValues,
          name: modifiedMetadata.name,
        });
        if (modifiedMetadata.namespace) {
          onFormIdentifierChanged();
        }
        break;
      default:
    }
    if (modifiedMetadata.namespace && modifiedMetadata.displayName && modifiedMetadata.name) {
      onMetadataModified(modifiedMetadata);
      setValidated(true);
    }
  };

  useEffect(() => {
    setMetadataInputValues(metadata);
  }, [metadata]);

  return (
    <Form validated={validated}>
      <Container fluid>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Namespace</Form.Label>
            <Form.Control
              type="text"
              disabled={!isCreate}
              isInvalid={alreadyExists}
              name="namespace"
              placeholder="Enter namespace"
              required
              value={metadataInputValues.namespace}
              onBlur={handleValueEntered}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {alreadyExists ? 'Namespace + name match existing form' : 'Namespace is required'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Display name</Form.Label>
            <Form.Control
              type="text"
              name="displayName"
              placeholder="Enter display name"
              required
              value={metadataInputValues.displayName}
              onBlur={handleValueEntered}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Display name is required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              disabled={!isCreate}
              isInvalid={alreadyExists}
              name="name"
              placeholder="Enter name"
              required
              value={metadataInputValues.name}
              onBlur={handleValueEntered}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {alreadyExists ? 'Namespace + name match existing form' : 'Name is required'}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              placeholder="Enter description"
              value={metadataInputValues.description}
              onBlur={handleValueEntered}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Version labels</Form.Label>
            <Form.Control
              type="text"
              name="versionLabels"
              placeholder="Enter version label(s)"
              value={metadataInputValues.versionLabels}
              onBlur={handleValueEntered}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Access Control List (ACL)</Form.Label>
            <Form.Select
              name="aclLocalReference"
              value={metadataInputValues.aclLocalReference}
              onBlur={handleValueEntered}
              onChange={handleChange}
            >
              <option value="">None</option>
              {localAcls.map((acl) => (
                <option key={acl.localReference} value={acl.localReference}>
                  {acl.metadata.name}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="text-muted">
              Select an ACL to control access permissions for this form
            </Form.Text>
          </Form.Group>
        </Row>
      </Container>
    </Form>
  );
}

FormMetadataInput.propTypes = {
  alreadyExists: PropTypes.bool.isRequired,
  isCreate: PropTypes.bool.isRequired,
  metadata: PropTypes.shape({
    namespace: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    versionLabels: PropTypes.string,
    aclLocalReference: PropTypes.string,
  }).isRequired,
  localAcls: PropTypes.arrayOf(
    PropTypes.shape({
      localReference: PropTypes.string.isRequired,
      metadata: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  onFormIdentifierChanged: PropTypes.func.isRequired,
  onMetadataModified: PropTypes.func.isRequired,
};

export default FormMetadataInput;
