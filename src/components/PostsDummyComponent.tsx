import {useEffect, useState} from "react";
import type {IPostDummy, ResponsePost} from "../models/IPostDummy.ts";
import {postDummyData} from "../services/api.service.ts";
import {PostDummyComponent} from "./children-components/dummy/post/PostDummyComponent.tsx";

export const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([])

    useEffect(() => {
        postDummyData.getPostDummy()
            .then((allPostsDummy: ResponsePost) => {
                setPosts(allPostsDummy.posts)
            })
    })
    return (
        <div>
            {posts.map((post) => <PostDummyComponent key={post.id} post={post} />)}
        </div>
    );
};