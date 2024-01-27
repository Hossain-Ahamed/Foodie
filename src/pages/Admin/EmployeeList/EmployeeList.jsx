import React from 'react';
import TableComponent from '../../../components/Table/Table';

const EmployeeList = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <TableComponent  INITIAL_VISIBLE_COLUMNS={["name", "role", "status", "actions",'id']} 

            AddNew={'/admin/add-employee'}
            />
        </div>
    );
};

export default EmployeeList;