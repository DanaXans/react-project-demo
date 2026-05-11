import type {FC} from "react";
import type {IUser} from "../models/dummy-user/IUser.ts";

type Props = { user: IUser };
export const UserComponent:FC<Props> = ({user}) => {
    return (
        <div>
            {user.id} {user.username}
        </div>
    );
};