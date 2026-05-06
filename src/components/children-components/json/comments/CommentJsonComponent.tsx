import type {FC} from "react";
import type {ICommentsJson} from "../../../../models/ICommentsJson.ts";
import "./CommentsJsonComponent.css"

type Props = { item: ICommentsJson };
export const CommentJsonComponent: FC<Props> = ({item}) => {
    return (
        <div className="commentCard">

            <div className="commentHeader">
                <p>Post: {item.postId}</p>
                <p>id: {item.id}</p>
            </div>

            <div className="commentName">
                {item.name}
            </div>

            <div className="commentEmail">
                {item.email}
            </div>

            <div className="commentBody">
                {item.body}
            </div>

        </div>
    );
};