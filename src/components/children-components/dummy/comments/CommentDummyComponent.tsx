import type {FC} from "react";
import type {ICommentsDummy} from "../../../../models/ICommentsDummy.ts";
import "./CommentsDummyComponent.css"

type Props = { comment: ICommentsDummy };
export const CommentDummyComponent:FC<Props> = ({comment}) => {
    return (
        <div className="commentCard">

            <div className="commentHeader">
                <p>Post: {comment.postId}</p>
                <p>ID: {comment.id}</p>
            </div>

            <div className="commentBody">
                {comment.body}
            </div>

            <div className="commentUser">
                <p className="userName">
                    {comment.user.fullName}
                </p>
                <p className="userUsername">
                    @{comment.user.username}
                </p>
            </div>

            <div className="commentFooter">
                Likes: {comment.likes}
            </div>

        </div>
    );
};