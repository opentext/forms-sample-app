import {
  forwardRef, useContext, useImperativeHandle, useState,
} from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../store/context/app-context';

const ValidationErrors = forwardRef(({ runtimeElementId }, ref) => {
// function ValidationErrors({ runtimeElementId }, ref) {
  const { formClient } = useContext(AppContext);
  const [problems, setProblems] = useState([]);

  useImperativeHandle(ref, () => ({
    validateFormData: async () => {
      const formDataInfo = await formClient.getFormData({ htmlElementId: runtimeElementId, validateMissingFields: process.env.REACT_APP_VALIDATE_MISSING_FIELDS !== 'false' });
      setProblems(formDataInfo.problems);
    },
    setProblems,
  }));

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Field</th>
          <th>Validation Error</th>
        </tr>
      </thead>
      <tbody>
        { problems.map(
          (problem, index) => (
            <tr key={`${problem.propertyPath}-${problem.message}`}>
              <td>{index + 1}</td>
              <td>{problem.propertyPath.slice(1)}</td>
              <td>{`${problem.messagePrefix} ${problem.message}`}</td>
            </tr>
          ),
        )}
      </tbody>
    </Table>
  );
});

ValidationErrors.displayName = 'ValidationErrors';

ValidationErrors.propTypes = {
  runtimeElementId: PropTypes.string,
};

export default ValidationErrors;
