import type {FC} from "react";
import type {IPostDummy} from "../../../../models/IPostDummy.ts";
import "./PostDummyComponent.css"

type Props = { post: IPostDummy };
export const PostDummyComponent: FC<Props> = ({post}) => {
    return (
        <div className="postCard">

            <div className="postHeader">
                <p>User: {post.userId}</p>
                <p>ID: {post.id}</p>
            </div>

            <div className="postTitle">
                {post.title}
            </div>

            <div className="postBody">
                {post.body}
            </div>

            <div className="postTags">
                {post.tags.map((tag, index) => (
                    <p key={index} className="tag">
                        #{tag}
                    </p>
                ))}
            </div>

            <div className="postFooter">
                <span>Like: {post.reactions.likes}</span>
                <span>Dislike: {post.reactions.dislikes}</span>
                <span>View: {post.views}</span>
            </div>

        </div>
    );
};