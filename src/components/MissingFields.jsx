import { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';

function MissingFields({ show = true }) {
  const {
    activeForm,
    formClient,
  } = useContext(AppContext);
  const [missingFieldsForActiveForm, setMissingFieldsForActiveForm] = useState([]);

  useEffect(() => {
    formClient.getMissingFields({ localReference: activeForm })
      .then(({ missingFields }) => setMissingFieldsForActiveForm(missingFields));
  }, [activeForm, formClient]);

  return (
    show && (
      missingFieldsForActiveForm
        ? (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Field Name</th>
                <th>Field Label</th>
              </tr>
            </thead>
            <tbody>
              { missingFieldsForActiveForm && missingFieldsForActiveForm.map(
                (missingField, index) => (
                  <tr key={missingField.propertyName}>
                    <td>{index + 1}</td>
                    <td>{missingField.propertyName}</td>
                    <td>{missingField.propertyValue.title}</td>
                  </tr>
                ),
              )}
            </tbody>
          </Table>
        )
        : <h5>No missing fields</h5>
    )
  );
}

MissingFields.propTypes = {
  show: PropTypes.string,
};

export default MissingFields;
