import {useEffect, useState} from "react";
import {commentsJsonService} from "../services/api.service.ts";
import type {ICommentsJson} from "../models/ICommentsJson.ts";
import {CommentJsonComponent} from "./children-components/json/comments/CommentJsonComponent.tsx";


export const CommentsJsonComponent = () => {
    const [comments, setComments] = useState<ICommentsJson[]>([]);
    useEffect(() => {
        commentsJsonService.getCommentsJson()
            .then(commentsJson => {
                setComments(commentsJson);
            })
    },[])

    return (
        <div>
            {comments.map((comment) => <CommentJsonComponent key={comment.id} item={comment}/>)}
        </div>
    );
};