import { useEffect } from 'react';
import {fetchUsers} from "../store/usersSlice.ts";
import {fetchPosts} from "../store/postsSlice.ts";
import {fetchComments} from "../store/commentsSlice.ts";
import { useAppDispatch, useAppSelector } from '../store/hooks';

export function ComplexPage() {
    const dispatch = useAppDispatch();

    const users = useAppSelector(state => state.users.items);
    const posts = useAppSelector(state => state.posts.items);
    const comments = useAppSelector(state => state.comments.items);

    const usersLoading = useAppSelector(state => state.users.loading);
    const postsLoading = useAppSelector(state => state.posts.loading);
    const commentsLoading = useAppSelector(state => state.comments.loading);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers());
        }

        if (!posts.length) {
            dispatch(fetchPosts());
        }

        if (!comments.length) {
            dispatch(fetchComments());
        }
    }, [dispatch, users.length, posts.length, comments.length]);

    const isLoading = usersLoading || postsLoading || commentsLoading;

    if (isLoading) {
        return <p>Loading complex data...</p>;
    }

    return (
        <div>
            <h1>Users with posts and comments</h1>

            {users.map(user => {
                const userPosts = posts.filter(post => post.userId === user.id);

                return (
                    <section key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>

                        {userPosts.map(post => {
                            const postComments = comments.filter(
                                comment => comment.postId === post.id
                            );

                            return (
                                <article key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>

                                    <h4>Comments:</h4>

                                    {postComments.map(comment => (
                                        <div className="comment" key={comment.id}>
                                            <strong>{comment.name}</strong>
                                            <p>{comment.email}</p>
                                            <p>{comment.body}</p>
                                        </div>
                                    ))}
                                </article>
                            );
                        })}
                    </section>
                );
            })}
        </div>
    );
}