import type {IUserDummy} from "../../../../../models/IUserDummy.ts";
import type {FC} from "react";

export const UserMainInfo:FC<{user:IUserDummy}> = ({user}) => {
    return (
        <div>
            <h3>
                <img src={user.image} alt={user.firstName}/>
                {user.firstName} {user.lastName}
            </h3>
            <p>ID: {user.id}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
        </div>
    );
};