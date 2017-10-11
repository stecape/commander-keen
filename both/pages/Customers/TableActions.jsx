import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import TableCardHeader from 'react-md/lib/DataTables/TableCardHeader';

const TableActions = ({ count, onRemoveClick }) => (
  <TableCardHeader
    title="Customers"
    visible={count > 0}
    contextualTitle={`${count} item${count > 1 ? 's' : ''} selected`}
    actions={[
      <Button
        icon
        key="delete"
        onClick={onRemoveClick}
        tooltipLabel="Remove selected rows"
        tooltipDelay={300}
        tooltipPosition="left"
      >
        delete
      </Button>,
    ]}
  >
  </TableCardHeader>
);

export default TableActions;