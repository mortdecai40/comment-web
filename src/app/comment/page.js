// pages/Page.js
"use client"
import React, { useState } from 'react';
import CommentTable from '../components/CommentTable';
import CommentForm from '../components/CommentForm';
import { useComments } from '../hooks/useComment';
import { Dialog } from 'primereact/dialog';
import { MdDeleteOutline } from "react-icons/md";
import { ConfirmDialog } from 'primereact/confirmdialog';
import Header from '../ui/header';

function Page() {
    const { comments, loading, error, addComment, deleteComment } = useComments();
    const [newComment, setNewComment] = useState({ name: '', email: '', body: '' });
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState('');

    const handleComment = (e) => {
        e.preventDefault();
        if (!newComment.name || !newComment.email || !newComment.body) {
            setErrorMessage("All fields are required.");
            return;
        }
        setErrorMessage("");
        addComment(newComment);
        setNewComment({ name: '', email: '', body: '' });
        setIsDialogVisible(false);
    };

    const filteredComments = comments.filter(comment => {
        return (
            comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comment.body.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const actionDelete = (rowData) => (
        <button
            className="p-2 text-white rounded-lg bg-red-400 my-3"
            onClick={() => deleteComment(rowData.id)}
        >
            <MdDeleteOutline className='size-5' />
        </button>
    );

    return (
        <>
        <Header/>
            <div className='h-screen xs:p-4 xl:p-14 bg-slate-300'>
                {error && <p>Error: {error}</p>}
                <div className='xs:px-5 md:px-14 xl:px-28 bg-white py-6 rounded-lg'>
                    <input
                        type='text'
                        name='search'
                        className='w-full h-10 p-2 focus:border-blue-500 border-2 outline-none rounded-lg'
                        placeholder='Search...'
                        value={searchTerm || ''}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className='text-left'>
                        <button
                            type='button'
                            className='bg-green-500 py-1 px-2 text-white rounded-md my-3 hover:bg-green-600 hover:outline-none'
                            onClick={() => setIsDialogVisible(true)}
                            name='add'
                        >
                            Add Comment
                        </button>
                    </div>
                    <CommentTable comments={filteredComments} loading={loading} actionDelete={actionDelete} />
                </div>

                <Dialog
                    header="Add Comment"
                    visible={isDialogVisible}
                    style={{ width: '50vw' }}
                    onHide={() => setIsDialogVisible(false)}
                    className='bg-white p-4 rounded-lg drop-shadow-lg'
                >
                    <CommentForm newComment={newComment} setNewComment={setNewComment} handleComment={handleComment} />
                </Dialog>
                <ConfirmDialog />
            </div>
        </>
    );
}

export default Page;
