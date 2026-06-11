import { useEffect } from 'react';
import {fetchPosts} from "../store/postsSlice.ts";
import { useAppDispatch, useAppSelector } from '../store/hooks';

export function PostsPage() {
    const dispatch = useAppDispatch();
    const { items: posts, loading, error } = useAppSelector(state => state.posts);

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchPosts());
        }
    }, [dispatch, posts.length]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Posts</h1>

            {posts.map(post => (
                <div className="card" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}