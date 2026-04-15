import type {FC} from "react";
import type {CommentModule} from "../../module/CommentModule.ts";

type PropType = { comment: CommentModule };
export const Comment: FC<PropType> = ({comment: {id, name, email, body}}) => {
    return (
        <>
            <p>{id} {email}</p>
            <p>{name} {body}</p>
        </>

    );
};