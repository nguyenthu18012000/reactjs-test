import React from 'react';
import TableUserComponent from '../../components/table-users';

const TableOfUser = ({ match }) => {
    return (
        <TableUserComponent match={match} />
    );
};

export default TableOfUser;