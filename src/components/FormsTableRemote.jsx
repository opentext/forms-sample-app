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
import FormListFilter from './FormListFilter';

const columns = [
  {
    id: 'namespace',
    name: 'Namespace',
    sortable: true,
    sortField: 'namespace',
    selector: (form) => form.namespace,
  },
  {
    id: 'name',
    name: 'Name',
    sortable: true,
    sortField: 'name',
    selector: (form) => form.name,
  },
  {
    id: 'displayName',
    name: 'Display name',
    sortable: true,
    sortField: 'displayName',
    selector: (form) => form.version.displayName,
  },
  {
    id: 'description',
    name: 'Description',
    sortable: true,
    sortField: 'description',
    selector: (form) => form.version.description,
  },
  {
    id: 'status',
    name: 'Status',
    sortable: true,
    sortField: 'status',
    selector: (form) => form.version.status,
  },
  {
    id: 'versionLabels',
    name: 'Version labels',
    sortable: true,
    sortField: 'versionLabels',
    format: (form) => form.version.versionLabels?.join(', ') ?? '',
    selector: (form) => form.version.versionLabels,
  },
  {
    id: 'created',
    name: 'Created',
    sortable: true,
    sortField: 'createTime',
    selector: (form) => (form.version.createTime ? (new Date(form.version.createTime)).toLocaleString() : ''),
  },
  {
    id: 'updated',
    name: 'Updated',
    sortable: true,
    sortField: 'updateTime',
    selector: (form) => (form.version.createTime ? (new Date(form.version.updateTime)).toLocaleString() : ''),
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

function FormsTableRemote({
  clearSelectedRow, onFormSelect,
}) {
  const {
    formClient,
    refreshRemoteList,
    showNotification,
  } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState('name asc');
  const [namespace, setNamespace] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState();

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
    setNamespace(filter.namespace);
    setName(filter.name);
    setStatus(filter.status);
  };

  useEffect(() => {
    let retryTimeout;

    const fetchRemoteForms = () => {
      if (!formClient) return;

      setLoading(true);
      formClient
        .listRemoteForms({
          namespace,
          name,
          status,
          size,
          offset,
          sortBy,
        })
        .then((list) => {
          setData(list.forms);
          setTotal(list.total);
          setLoading(false);
        })
        .catch((err) => {
          /* If no error message, this is because the access token needs refreshing,
          so in that case not raising any error notification */
          if (err?.message) {
            showNotification(
              `Error fetching remote forms list: ${err.message}`,
              notificationTypes.error,
            );
          }
          // Retry after 5 seconds
          retryTimeout = setTimeout(fetchRemoteForms, 5000);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchRemoteForms();

    return () => {
      if (retryTimeout) clearTimeout(retryTimeout);
    };
  }, [
    formClient,
    refreshRemoteList,
    size,
    offset,
    sortBy,
    namespace,
    name,
    status,
    showNotification,
  ]);

  return (
    <Container fluid>
      <Row>
        <Col md={6} className="pt-2">
          <FormListFilter onFilterSubmit={submitFilter} />
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
            onSelectedRowsChange={onFormSelect}
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

FormsTableRemote.propTypes = {
  clearSelectedRow: PropTypes.bool,
  onFormSelect: PropTypes.func.isRequired,
};

export default FormsTableRemote;
