// components/CommentTable.js
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const CommentTable = ({ comments, loading, actionDelete }) => {
    return (
        <DataTable
            value={comments}
            loading={loading}
            tableStyle={{ minWidth: '50rem' }}
            paginator
            className='custom-table overflow-x-scroll'
            rows={15}
        >
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="body" header="Comment" />
            <Column body={actionDelete} bodyStyle={{ textAlign: 'center' }} header="Actions" />
        </DataTable>
    );
};

export default CommentTable;
