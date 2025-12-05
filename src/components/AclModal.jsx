import './AclModal.css';

import { useContext, useEffect, useState } from 'react';
import {
  Button, Modal, Form, Row, Col, Container, Badge, Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';
import { notificationTypes } from './Notification';

const PERMISSION_TYPES = [
  'read',
  'modify',
  'publish',
  'edit_permissions',
  'delete',
  'change_owner',
];

const IDENTITY_TYPES = [
  { value: 'user', label: 'User' },
  { value: 'group', label: 'Group' },
  { value: 'alias', label: 'Alias' },
];

const ALIAS_OPTIONS = [
  { value: 'subscription-user', label: 'Subscription User' },
  { value: 'anonymous', label: 'Anonymous' },
  { value: 'owner', label: 'Owner' },
];

const emptyAcl = {
  name: '',
  displayName: '',
  description: '',
  shared: false,
  permits: [],
};

const emptyPermit = {
  identityId: '',
  identityType: 'user',
  permissions: [],
};

function AclModal({
  show,
  onHide,
  acl,
  localReference,
  isEdit = false,
}) {
  const {
    formClient,
    showNotification,
  } = useContext(AppContext);

  const [aclData, setAclData] = useState(emptyAcl);
  const [permits, setPermits] = useState([]);
  const [newPermit, setNewPermit] = useState(emptyPermit);
  const [isCreating, setIsCreating] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (show) {
      if (isEdit && acl) {
        setAclData({
          name: acl.name || '',
          displayName: acl.displayName || '',
          description: acl.description || '',
          shared: acl.shared || false,
          permits: acl.permits || [],
        });
        setPermits(acl.permits || []);
      } else {
        setAclData(emptyAcl);
        setPermits([]);
      }
      setNewPermit(emptyPermit);
      setValidationErrors({});
    }
  }, [show, acl, isEdit]);

  const validateForm = () => {
    const errors = {};

    if (!aclData.name.trim()) {
      errors.name = 'ACL name is required';
    }

    if (permits.length === 0) {
      errors.permits = 'At least one permit is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAclDataChange = (field, value) => {
    setAclData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  const handlePermitChange = (field, value) => {
    setNewPermit((prev) => {
      // If changing identity type, reset the identity ID since it needs to be compatible
      if (field === 'identityType') {
        return {
          ...prev,
          [field]: value,
          identityId: '', // Reset identity ID when type changes
        };
      }
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handlePermissionToggle = (permitIndex, permission) => {
    setPermits((prev) => prev.map((permit, index) => {
      if (index === permitIndex) {
        const permissions = permit.permissions.includes(permission)
          ? permit.permissions.filter((p) => p !== permission)
          : [...permit.permissions, permission];
        return { ...permit, permissions };
      }
      return permit;
    }));
  };

  const handleNewPermissionToggle = (permission) => {
    const permissions = newPermit.permissions.includes(permission)
      ? newPermit.permissions.filter((p) => p !== permission)
      : [...newPermit.permissions, permission];
    setNewPermit((prev) => ({
      ...prev,
      permissions,
    }));
  };

  const validatePermit = (permit) => {
    if (!permit.identityId.trim()) {
      return 'Identity ID is required';
    }

    // Validate based on identity type
    switch (permit.identityType) {
      case 'alias':
        if (!ALIAS_OPTIONS.some((option) => option.value === permit.identityId)) {
          return 'Please select a valid alias option';
        }
        break;
      case 'group':
        if (permit.identityId.length < 2) {
          return 'Group name must be at least 2 characters';
        }
        break;
      case 'user':
        // Basic user ID validation - could be enhanced based on your system requirements
        if (!/^[a-zA-Z0-9._@-]+$/.test(permit.identityId)) {
          return 'User ID contains invalid characters';
        }
        break;
      default:
        break;
    }

    if (permit.permissions.length === 0) {
      return 'At least one permission must be selected';
    }

    return null;
  };

  const addPermit = () => {
    const validationError = validatePermit(newPermit);
    if (validationError) {
      showNotification(validationError, notificationTypes.error);
      return;
    }

    // Check for duplicate identity
    const existingPermit = permits.find((p) => p.identityId === newPermit.identityId);
    if (existingPermit) {
      showNotification('A permit for this identity already exists', notificationTypes.error);
      return;
    }

    setPermits((prev) => [...prev, { ...newPermit }]);
    setNewPermit(emptyPermit);
    // Clear permits validation error
    if (validationErrors.permits) {
      setValidationErrors((prev) => ({
        ...prev,
        permits: null,
      }));
    }
  };

  const removePermit = (index) => {
    setPermits((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsCreating(true);

    try {
      const aclParameters = {
        name: aclData.name,
        displayName: aclData.displayName,
        description: aclData.description,
        shared: aclData.shared,
        permits,
      };
      if (isEdit) {
        // Update existing ACL
        await formClient.updateAcl({
          localReference,
          acl: aclParameters,
        });
        showNotification('ACL updated successfully', notificationTypes.success);
      } else {
        // Create new ACL
        await formClient.createAcl(aclParameters);
        showNotification('ACL created successfully', notificationTypes.success);
      }

      onHide();
    } catch (error) {
      showNotification(
        error.message || `Failed to ${isEdit ? 'update' : 'create'} ACL`,
        notificationTypes.error,
      );
    } finally {
      setIsCreating(false);
    }
  };

  const getIdentityGuidance = (identityType) => {
    switch (identityType) {
      case 'group':
        return {
          placeholder: 'Enter group name from admin center',
          helpText: 'Specify the name of a group in the admin center that has access to the form.',
          options: [],
        };
      case 'alias':
        return {
          placeholder: 'Select predefined alias',
          helpText: 'Choose from predefined alias options.',
          options: ALIAS_OPTIONS,
        };
      case 'user':
        return {
          placeholder: 'Enter user ID',
          helpText: 'Specify a particular user ID in the subscription.',
          options: [],
        };
      default:
        return {
          placeholder: 'Enter identity ID',
          helpText: 'Enter the appropriate identity identifier.',
          options: [],
        };
    }
  };

  const handleClose = () => {
    setAclData(emptyAcl);
    setPermits([]);
    setNewPermit(emptyPermit);
    setValidationErrors({});
    onHide();
  };

  const renderPermissionCheckboxes = (permissions, permitIndex = null, isNewPermit = false) => (
    <div className="acl-permission-checkboxes">
      {PERMISSION_TYPES.map((permission) => {
        const isSelected = permissions.includes(permission);
        const checkboxId = `permission-${permission}-${permitIndex || 'new'}`;
        return (
          <Form.Check
            key={permission}
            type="checkbox"
            id={checkboxId}
            label={permission.replace('_', ' ')}
            checked={isSelected}
            className="permission-checkbox"
            onChange={() => {
              if (isNewPermit) {
                handleNewPermissionToggle(permission);
              } else if (permitIndex !== null) {
                handlePermissionToggle(permitIndex, permission);
              }
            }}
          />
        );
      })}
    </div>
  );

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? 'Edit ACL' : 'Create New ACL'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          {/* ACL Basic Information */}
          <div className="acl-form-section">
            <h6>ACL Information</h6>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={aclData.name}
                    onChange={(e) => handleAclDataChange('name', e.target.value)}
                    isInvalid={!!validationErrors.name}
                    disabled={isEdit} // Name should not be editable in edit mode
                  />
                  <Form.Control.Feedback type="invalid">
                    {validationErrors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={aclData.displayName}
                    onChange={(e) => handleAclDataChange('displayName', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={aclData.description}
                    onChange={(e) => handleAclDataChange('description', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Check
                  type="checkbox"
                  label="Shared with other users"
                  checked={aclData.shared}
                  onChange={(e) => handleAclDataChange('shared', e.target.checked)}
                  disabled={isEdit}
                />
              </Col>
            </Row>
          </div>

          {/* Existing Permits */}
          <div className="acl-form-section">
            <h6>Access Permits</h6>
            {validationErrors.permits && (
              <Alert variant="danger" className="mb-3">
                {validationErrors.permits}
              </Alert>
            )}

            {permits.map((permit, index) => (
              <div key={`permit-${permit.identityId}-${permit.identityType}`} className="acl-permit-item">
                <div className="acl-permit-header">
                  <div>
                    <strong>{permit.identityId}</strong>
                    <Badge bg="info" className="ms-2">
                      {permit.identityType}
                    </Badge>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removePermit(index)}
                  >
                    Remove
                  </Button>
                </div>
                <div className="permissions-section">
                  <small className="text-muted">Permissions:</small>
                  <div className="acl-permission-checkboxes">
                    {renderPermissionCheckboxes(permit.permissions, index)}
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Permit */}
            <div className="identity-type-section">
              <h6>Add New Permit</h6>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Identity Type</Form.Label>
                    <Form.Select
                      value={newPermit.identityType}
                      onChange={(e) => handlePermitChange('identityType', e.target.value)}
                    >
                      {IDENTITY_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Text className="identity-guidance">
                      {newPermit.identityType === 'group' && 'Groups are managed in the admin center'}
                      {newPermit.identityType === 'alias' && 'Predefined system roles and user types'}
                      {newPermit.identityType === 'user' && 'Individual users within your subscription'}
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Identity ID</Form.Label>
                    {newPermit.identityType === 'alias' ? (
                      <Form.Select
                        value={newPermit.identityId}
                        onChange={(e) => handlePermitChange('identityId', e.target.value)}
                      >
                        <option value="">Select an alias...</option>
                        {ALIAS_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    ) : (
                      <Form.Control
                        type="text"
                        value={newPermit.identityId}
                        onChange={(e) => handlePermitChange('identityId', e.target.value)}
                        placeholder={getIdentityGuidance(newPermit.identityType).placeholder}
                      />
                    )}
                    <Form.Text className="text-muted">
                      {getIdentityGuidance(newPermit.identityType).helpText}
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <div className="mb-3 permissions-section">
                <Form.Label>Permissions</Form.Label>
                <div className="acl-permission-checkboxes">
                  {renderPermissionCheckboxes(newPermit.permissions, null, true)}
                </div>
              </div>
              <Button
                variant="primary"
                size="sm"
                onClick={addPermit}
                disabled={!newPermit.identityId.trim()}
              >
                Add Permit
              </Button>
            </div>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isCreating}
        >
          {(() => {
            if (isCreating) return 'Saving...';
            return isEdit ? 'Update ACL' : 'Create ACL';
          })()}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AclModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  localReference: PropTypes.string,
  acl: PropTypes.shape({
    name: PropTypes.string,
    displayName: PropTypes.string,
    description: PropTypes.string,
    shared: PropTypes.bool,
    permits: PropTypes.arrayOf(
      PropTypes.shape({
        identityId: PropTypes.string,
        identityType: PropTypes.string,
        permissions: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  }),
  isEdit: PropTypes.bool,
};

export default AclModal;
