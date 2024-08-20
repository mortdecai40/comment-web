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
            className='custom-table overflow-x-scroll '
            rows={15}
        >
            <Column field="name" header="Name" className='text-slate-800' />
            <Column field="email" header="Email" className='text-slate-800'/>
            <Column field="body" header="Comment" className='text-slate-800'/>
            <Column body={actionDelete} bodyStyle={{ textAlign: 'center' }} header="Actions" />
        </DataTable>
    );
};

export default CommentTable;
