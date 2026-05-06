import "./PostJsonComponent.css";
import type {FC} from "react";
import type {IPostJson} from "../../../../models/IPostJson.ts";

type Props = { post: IPostJson };
export const PostJsonComponent: FC<Props> = ({post}) => {
    return (
        <div className="postCard">
            <div className="postHeader">
                <span>User: {post.userId}</span>
                <span>ID: {post.id}</span>
            </div>

            <div className="postTitle">
                {post.title}
            </div>

            <div className="postBody">
                {post.body}
            </div>
        </div>
    );
};