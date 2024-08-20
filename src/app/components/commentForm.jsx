// components/CommentForm.js
import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const CommentForm = ({ newComment, setNewComment, handleComment }) => {
    return (
        <form onSubmit={handleComment}>
            <div className="p-fluid ">
                <div className="p-field space-x-2 flex flex-col m-2 ">
                    <InputText
                        placeholder='Name'
                        type='text'
                        className='border rounded-md text-slate-800 h-9 p-2 focus:outline-blue-500'
                        id='name'
                        value={newComment.name || ''}
                        onChange={(e) =>
                            setNewComment({ ...newComment, name: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="p-field m-2">
                    <InputText
                        id="email"
                        type="email"
                        placeholder='Email'
                        className='border rounded-md text-slate-800 h-9 p-2 focus:outline-blue-500'
                        value={newComment.email || ''}
                        onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                        required
                    />
                </div>
                <div className="p-field m-2">
                    <InputTextarea
                        placeholder='Comment'
                        id="comment"
                        className='border rounded-md p-2 text-slate-800 focus:outline-blue-500'
                        value={newComment.body || ''}
                        onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
                        required
                        rows={5}
                        cols={30}
                    />
                </div>
                <Button label="Submit" className='px-3 py-2 bg-blue-400 hover:bg-blue-700 m-2 outline-none  text-white rounded-lg' />
            </div>
        </form>
    );
};

export default CommentForm;
