import {useEffect, useState} from "react";
import type {IPostJson} from "../models/IPostJson.ts";
import {postJsonService} from "../services/api.service.ts";
import {PostJsonComponent} from "./children-components/json/post/PostJsonComponent.tsx";

export const PostsJsonComponent = () => {
    const [posts, setPosts] = useState<IPostJson[]>([])

    useEffect(() => {
        postJsonService.getPostJson()
            .then(postJson => {
                setPosts(postJson)
            });
    })
    return (
        <div>
            {
                posts.map((post)=> <PostJsonComponent key={post.id} post={post} />)
            }
        </div>
    );
};