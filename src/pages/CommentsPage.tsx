import { useEffect } from 'react';
import {fetchComments} from "../store/commentsSlice.ts";
import { useAppDispatch, useAppSelector } from '../store/hooks';

export function CommentsPage() {
    const dispatch = useAppDispatch();
    const { items: comments, loading, error } = useAppSelector(
        state => state.comments
    );

    useEffect(() => {
        if (!comments.length) {
            dispatch(fetchComments());
        }
    }, [dispatch, comments.length]);

    if (loading) return <p>Loading comments...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Comments</h1>

            {comments.map(comment => (
                <div className="card" key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
}