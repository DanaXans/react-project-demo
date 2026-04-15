import {useEffect, useState} from "react";
import {loadComments} from "../../service/api.service.ts";
import type {CommentModule} from "../../module/CommentModule.ts";
import {Comment} from "../comment-component/Comment.tsx";


export const Comments = () => {
    const [comments, setComments] = useState<CommentModule[]>([]);
    useEffect(() => {
        loadComments().then(value => setComments(value))
    }, []);
    return (
        <div>{comments.map(comment=><Comment comment={comment} key={comment.id}/>)}</div>
    );
};