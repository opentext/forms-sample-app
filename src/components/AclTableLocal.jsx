import { useContext, useEffect, useState } from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';
import AclListFilter from './AclListFilter';

const columns = [
  {
    id: 'name',
    name: 'Name',
    sortable: true,
    selector: (acl) => acl.metadata.name,
  },
  {
    id: 'displayName',
    name: 'Display Name',
    sortable: true,
    selector: (acl) => acl.metadata.displayName || '',
  },
  {
    id: 'description',
    name: 'Description',
    sortable: true,
    selector: (acl) => acl.metadata.description || '',
  },
  {
    id: 'shared',
    name: 'Shared',
    sortable: true,
    selector: (acl) => (acl.metadata.shared ? 'Yes' : 'No'),
  },
];

const customStyles = {
  headCells: {
    style: {
      fontSize: '16px',
    },
  },
  cells: {
    style: {
      fontSize: '16px',
    },
  },
};

function AclTableLocal({
  clearSelectedRow, onAclSelect, refreshTrigger,
}) {
  const {
    formClient,
  } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [shared, setShared] = useState();

  const submitFilter = (filter) => {
    setName(filter.name);
    setShared(filter.shared);
  };

  useEffect(() => {
    if (formClient) {
      formClient.listLocalAcls({
        name,
        shared,
      })
        .then((list) => {
          const dataMapping = list.map((localAcl) => ({
            localRef: localAcl.localReference,
            metadata: localAcl.metadata,
          }));
          setData(dataMapping);
        });
    }
  }, [formClient, refreshTrigger, name, shared]);

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="pt-2">
          <AclListFilter onFilterSubmit={submitFilter} />
        </Col>
      </Row>
      <Row>
        <Col className="pt-2">
          <DataTable
            clearSelectedRows={clearSelectedRow}
            columns={columns}
            customStyles={customStyles}
            data={data}
            defaultSortFieldId="name"
            fixedHeader
            highlightOnHover
            keyField="localRef"
            noContextMenu
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 50, 100]}
            responsive
            selectableRows
            selectableRowsHighlight
            selectableRowsSingle
            striped
            onSelectedRowsChange={onAclSelect}
          />
        </Col>
      </Row>
    </Container>
  );
}

AclTableLocal.propTypes = {
  clearSelectedRow: PropTypes.bool,
  onAclSelect: PropTypes.func.isRequired,
  refreshTrigger: PropTypes.number,
};

export default AclTableLocal;
