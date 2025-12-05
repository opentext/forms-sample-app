import {
  useState, useEffect, useContext, useRef,
} from 'react';
import {
  Modal, Button, Col, Container, Row,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';
import FormListFilter from './FormListFilter';
import AppContext from '../store/context/app-context';
import { notificationTypes } from './Notification';

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

function ThemesListModal({
  show,
  onHide,
  title,
}) {
  const {
    formClient,
    activeThemes,
    showNotification,
    setActiveThemes,
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

  const selectedRowsRef = useRef([]);

  const columns = [
    {
      id: 'namespace',
      name: 'Namespace',
      sortable: true,
      sortField: 'namespace',
      selector: (theme) => theme.namespace,
    },
    {
      id: 'name',
      name: 'Name',
      sortable: true,
      sortField: 'name',
      selector: (theme) => theme.name,
    },
    {
      id: 'displayName',
      name: 'Display name',
      sortable: true,
      sortField: 'displayName',
      selector: (theme) => theme.displayName,
    },
    {
      id: 'description',
      name: 'Description',
      sortable: true,
      sortField: 'description',
      selector: (theme) => theme.description,
    },
    {
      id: 'versionLabels',
      name: 'Version labels',
      sortable: true,
      sortField: 'versionLabels',
      format: (theme) => theme.versionLabels?.join(', ') ?? '',
      selector: (theme) => theme.versionLabels,
    },
    {
      id: 'status',
      name: 'Status',
      sortable: true,
      sortField: 'status',
      selector: (theme) => theme.status,
    },
  ];

  const handleConfirm = () => {
    // Get current selected rows from ref (no state needed)
    const currentSelectedRows = selectedRowsRef.current;

    // Convert to themes format for setActiveThemes
    const themes = currentSelectedRows.reduce((acc, row) => {
      acc[row.name] = {
        label: {
          en: row.displayName ?? row.name,
        },
        namespace: row.namespace,
      };
      return acc;
    }, {});

    setActiveThemes(themes);
    onHide();
  };

  const submitFilter = (filter) => {
    setNamespace(filter.namespace);
    setName(filter.name);
    setStatus(filter.status);
  };

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

  const handleThemeSelect = ({ selectedRows: newSelectedRows }) => {
    // Store selected rows in ref for handleConfirm to access
    selectedRowsRef.current = newSelectedRows;
  };

  useEffect(() => {
    const fetchThemes = () => {
      if (!formClient) return;

      setLoading(true);
      formClient
        .listThemes({
          namespace,
          name,
          status,
          size,
          offset,
          sortBy,
        })
        .then((list) => {
          setData(list.themes);
          setTotal(list.total);
          setLoading(false);
        })
        .catch((err) => {
          if (err?.message) {
            showNotification(
              `Error fetching themes list: ${err.message}`,
              notificationTypes.error,
            );
          }
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchThemes();
  }, [formClient, size, offset, sortBy, namespace, name, status, showNotification]);

  return (
    <Modal show={show} onHide={onHide} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col md={12} className="pt-2">
              <FormListFilter onFilterSubmit={submitFilter} />
            </Col>
          </Row>
          <Row>
            <Col className="pt-2">
              <DataTable
                columns={columns}
                customStyles={customStyles}
                data={data}
                defaultSortFieldId="name"
                fixedHeader
                highlightOnHover
                keyField="name"
                noContextMenu
                pagination
                paginationPerPage={10}
                paginationTotalRows={total}
                paginationRowsPerPageOptions={[10, 20, 50, 100]}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                onSelectedRowsChange={handleThemeSelect}
                onSort={handleSort}
                progressPending={loading}
                responsive
                selectableRows
                selectableRowsHighlight
                selectableRowSelected={(row) => activeThemes[row.name] !== undefined}
                striped
                clearSelectedRows={false}
              />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm Selection
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ThemesListModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  selectedRowData: PropTypes.shape({}),
};

export default ThemesListModal;
