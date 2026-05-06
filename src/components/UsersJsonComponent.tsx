import {useEffect, useState} from "react";
import type {IUsersJson} from "../models/IUsersJson.ts";
import {UserJsonComponent} from "./children-components/json/user/UserJsonComponent.tsx";
import {userJsonService} from "../services/api.service.ts";

export const UsersJsonComponent = () => {
    const [users, setUsers] = useState<IUsersJson[]>([]);

    useEffect(() => {
        userJsonService.getUsersJson()
            .then((allUsersJson) => {
            setUsers(allUsersJson);
        })
    }, []);
    return (
        <div>
            {
                users.map((user) => <UserJsonComponent key={user.id} item={user} />)
            }
        </div>
    );
};