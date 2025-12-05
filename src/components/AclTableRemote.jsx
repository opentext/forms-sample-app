import {
  useContext, useEffect, useState,
} from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';
import { notificationTypes } from './Notification';
import AppContext from '../store/context/app-context';
import AclListFilter from './AclListFilter';

const columns = [
  {
    id: 'name',
    name: 'Name',
    sortable: true,
    sortField: 'name',
    selector: (acl) => acl.name,
  },
  {
    id: 'displayName',
    name: 'Display Name',
    sortable: true,
    sortField: 'displayName',
    selector: (acl) => acl.displayName || '',
  },
  {
    id: 'description',
    name: 'Description',
    sortable: true,
    sortField: 'description',
    selector: (acl) => acl.description || '',
  },
  {
    id: 'shared',
    name: 'Shared',
    sortable: true,
    sortField: 'shared',
    selector: (acl) => (acl.shared ? 'Yes' : 'No'),
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

function AclTableRemote({
  clearSelectedRow, onAclSelect, refreshTrigger,
}) {
  const {
    formClient,
    showNotification,
  } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState('name asc');
  const [name, setName] = useState();
  const [shared, setShared] = useState();

  const handlePageChange = (page) => {
    const newOffset = page < 1 ? 0 : (page - 1) * size;
    setOffset(newOffset);
  };

  const handlePerRowsChange = (newSize, page) => {
    const newOffset = page < 1 ? 0 : (page - 1) * newSize;
    setOffset(newOffset);
    setSize(newSize);
  };

  const handleSort = (column, sortDirection) => {
    const newSortBy = `${column.sortField} ${sortDirection}`;
    setSortBy(newSortBy);
  };

  const submitFilter = (filter) => {
    setName(filter.name);
    setShared(filter.shared);
  };

  useEffect(() => {
    let retryTimeout;

    const fetchRemoteAcls = () => {
      if (!formClient) return;

      setLoading(true);
      formClient
        .listRemoteAcls({
          name,
          shared,
          size,
          offset,
          sortBy,
        })
        .then((list) => {
          setData(list.acls);
          setTotal(list.total);
          setLoading(false);
        })
        .catch((err) => {
          /* If no error message, this is because the access token needs refreshing,
          so in that case not raising any error notification */
          if (err?.message) {
            showNotification(
              `Error fetching remote ACLs list: ${err.message}`,
              notificationTypes.error,
            );
          }
          // Retry after 5 seconds
          retryTimeout = setTimeout(fetchRemoteAcls, 5000);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchRemoteAcls();

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
    };
  }, [
    formClient,
    refreshTrigger,
    size,
    offset,
    sortBy,
    name,
    shared,
    showNotification,
  ]);

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
            keyField="id"
            noContextMenu
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            onSelectedRowsChange={onAclSelect}
            onSort={handleSort}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 50, 100]}
            paginationServer
            paginationTotalRows={total}
            progressPending={loading}
            responsive
            selectableRows
            selectableRowsHighlight
            selectableRowsSingle
            sortServer
            striped
          />
        </Col>
      </Row>
    </Container>
  );
}

AclTableRemote.propTypes = {
  clearSelectedRow: PropTypes.bool,
  onAclSelect: PropTypes.func.isRequired,
  refreshTrigger: PropTypes.number,
};

export default AclTableRemote;
