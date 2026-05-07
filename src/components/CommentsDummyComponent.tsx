import {useEffect, useState} from "react";
import type {ICommentsDummy, ResponseCommentsDummy} from "../models/ICommentsDummy.ts";
import {commentsDummyData} from "../services/api.service.ts";
import {CommentDummyComponent} from "./children-components/dummy/comments/CommentDummyComponent.tsx";


export const CommentsDummyComponent = () => {
    const[comments, setComments] = useState<ICommentsDummy[]>([]);

    useEffect(() => {
        commentsDummyData.getCommentsDummy()
            .then((allDummyComments: ResponseCommentsDummy)=>{
            setComments(allDummyComments.comments)
            })
    },[])
    return (
        <div>
            {comments.map((comment) => <CommentDummyComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};