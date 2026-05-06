import type {FC} from "react";
import type {IUserDummy} from "../../../../../models/IUserDummy.ts";

export const UserDetails:FC<{user:IUserDummy}> = ({user}) => {
    return (
        <div>
            <h4>Details</h4>
            <p>Birth date: {user.birthDate}</p>
            <p>Blood: {user.bloodGroup}</p>
            <p>Height: {user.height}</p>
            <p>Weight: {user.weight}</p>
            <p>Eye: {user.eyeColor}</p>
            <p>Hair: {user.hair.color}, {user.hair.type}</p>
        </div>
    );
};