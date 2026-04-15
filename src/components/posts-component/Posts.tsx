import {useState, useEffect} from "react";
import {loadPosts} from "../../service/api.service.ts";
import type {PostModel} from "../../models/PostModel.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        loadPosts().then(value => setPosts(value));
    }, []);
    return (
        <div>{posts.map(post=><Post post={post} key={post.id}/>)}</div>
    );
};