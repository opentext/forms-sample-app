import {
  useState,
} from 'react';
import {
  Button, Form, InputGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function FormListFilter({ onFilterSubmit }) {
  const [namespace, setNamespace] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleNamespaceChange = ({ target }) => {
    setNamespace(target.value);
  };

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleStatusChange = ({ target }) => {
    setStatus(target.value);
  };

  const submitFilter = () => {
    const filter = {};
    if (namespace) {
      filter.namespace = namespace;
    }
    if (name) {
      filter.name = name;
    }
    if (status) {
      filter.status = status;
    }
    onFilterSubmit(filter);
  };

  return (
    <Form>
      <InputGroup>
        <h6 className="pt-2 col-sm-1">Filter</h6>
        <InputGroup.Text>Namespace</InputGroup.Text>
        <Form.Control
          onChange={handleNamespaceChange}
          value={namespace}
        />
        <InputGroup.Text>Name</InputGroup.Text>
        <Form.Control
          onChange={handleNameChange}
          value={name}
        />
        <InputGroup.Text>Status</InputGroup.Text>
        <Form.Select
          onChange={handleStatusChange}
          value={status}
        >
          <option value="">Any</option>
          <option value="DRAFT">Only draft</option>
          <option value="PUBLISHED">Only published</option>
        </Form.Select>
        <Button color="primary" onClick={submitFilter}>
          Filter
        </Button>
      </InputGroup>
    </Form>
  );
}

FormListFilter.propTypes = {
  onFilterSubmit: PropTypes.func.isRequired,
};

export default FormListFilter;
