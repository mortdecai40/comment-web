// hooks/useComments.js
import { useState, useEffect } from 'react';

export const useComments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setComments(data);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    const addComment = async (newComment) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });
            if (!response.ok) {
                throw new Error('Failed to add comment');
            }
            const data = await response.json();
            setComments([data, ...comments]);
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteComment = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }
            setComments(comments.filter((comment) => comment.id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    return {
        comments,
        loading,
        error,
        addComment,
        deleteComment
    };
};
