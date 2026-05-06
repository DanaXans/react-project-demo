import type {FC} from "react";
import type {IUserDummy} from "../../../../../models/IUserDummy.ts";

export const UserContacts:FC<{user:IUserDummy}> = ({user}) => {
    return (
        <div>
            <h4>Contacts</h4>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
        </div>
    );
};