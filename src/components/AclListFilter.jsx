import { useState } from 'react';
import {
  Button, Form, InputGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function AclListFilter({ onFilterSubmit }) {
  const [name, setName] = useState('');
  const [shared, setShared] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSharedChange = (e) => {
    setShared(e.target.value);
  };

  const submitFilter = () => {
    const filter = {
      name: name || undefined,
      shared: shared === '' ? undefined : shared === 'true',
    };
    onFilterSubmit(filter);
  };

  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>Name</InputGroup.Text>
        <Form.Control
          onChange={handleNameChange}
          value={name}
          placeholder="Filter by ACL name"
        />
        <InputGroup.Text>Shared</InputGroup.Text>
        <Form.Select
          onChange={handleSharedChange}
          value={shared}
        >
          <option value="">Any</option>
          <option value="true">Shared only</option>
          <option value="false">Non-shared only</option>
        </Form.Select>
        <Button color="primary" onClick={submitFilter}>
          Filter
        </Button>
      </InputGroup>
    </Form>
  );
}

AclListFilter.propTypes = {
  onFilterSubmit: PropTypes.func.isRequired,
};

export default AclListFilter;
