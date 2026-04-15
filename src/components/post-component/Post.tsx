import type {FC} from "react";
import type {PostModel} from "../../models/PostModel.ts";

type PropType = { post: PostModel };
export const Post: FC<PropType> = ({post: {id, title, body}}) => {
    return (
        <p className='m-5'>{id} {title} {body}</p>
    );
};