import { useContext, useEffect, useState } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';
import FormListFilter from './FormListFilter';
import ThemesListModal from './ThemesListModal';
import AclManagementModal from './AclManagementModal';

const columns = [
  {
    id: 'namespace',
    name: 'Namespace',
    sortable: true,
    selector: (form) => form.namespace,
  },
  {
    id: 'name',
    name: 'Name',
    sortable: true,
    selector: (form) => form.name,
  },
  {
    id: 'displayName',
    name: 'Display name',
    sortable: true,
    selector: (form) => form.version.displayName,
  },
  {
    id: 'description',
    name: 'Description',
    sortable: true,
    selector: (form) => form.version.description,
  },
  {
    id: 'hasUnsavedChanges',
    name: 'hasUnsavedChanges',
    sortable: true,
    selector: (form) => `${form.hasUnsavedChanges}`,
  },
  {
    id: 'status',
    name: 'Status',
    sortable: true,
    selector: (form) => form.version.status,
  },
  {
    id: 'versionLabels',
    name: 'Version labels',
    sortable: true,
    format: (form) => form.version.versionLabels?.join(', ') ?? '',
    selector: (form) => form.version.versionLabels,
  },
  {
    id: 'created',
    name: 'Created',
    sortable: true,
    selector: (form) => (form.version.createTime ? (new Date(form.version.createTime)).toLocaleString() : ''),
  },
  {
    id: 'updated',
    name: 'Updated',
    sortable: true,
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

function FormsTableLocal({
  clearSelectedRow, onFormSelect,
}) {
  const {
    formClient,
    refreshLocalList,
    setUnsavedChangesFlag,
  } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [namespace, setNamespace] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [showThemesListModal, setShowThemesListModal] = useState(false);
  const [showAclManagementModal, setShowAclManagementModal] = useState(false);

  const submitFilter = (filter) => {
    setNamespace(filter.namespace);
    setName(filter.name);
    setStatus(filter.status);
  };

  useEffect(() => {
    if (formClient) {
      formClient.listLocalForms({
        namespace,
        name,
        status,
      })
        .then((list) => {
          const dataMapping = list.map((localForm) => (
            { localRef: localForm.localRef, ...localForm.metadata }
          ));
          setData(dataMapping);
          const hasUnsavedChanges = dataMapping
            .some((form) => form.hasUnsavedChanges === true);
          setUnsavedChangesFlag(hasUnsavedChanges);
        });
    }
  }, [formClient, refreshLocalList, namespace, name, status, setUnsavedChangesFlag]);

  return (
    <Container fluid>
      <Row>
        <Col md={6} className="pt-2">
          <FormListFilter onFilterSubmit={submitFilter} />
        </Col>
        <Col md={6} className="pt-2 text-end">
          <Button onClick={() => setShowThemesListModal(true)} className="me-2">Select themes</Button>
          <Button onClick={() => setShowAclManagementModal(true)}>Manage ACLs</Button>
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
            onSelectedRowsChange={onFormSelect}
          />
        </Col>
      </Row>
      <ThemesListModal
        show={showThemesListModal}
        onHide={() => setShowThemesListModal(false)}
        title="Select Themes"
      />
      <AclManagementModal
        show={showAclManagementModal}
        onHide={() => setShowAclManagementModal(false)}
        title="Manage ACLs"
      />
    </Container>
  );
}

FormsTableLocal.propTypes = {
  clearSelectedRow: PropTypes.bool,
  onFormSelect: PropTypes.func.isRequired,
};

export default FormsTableLocal;
