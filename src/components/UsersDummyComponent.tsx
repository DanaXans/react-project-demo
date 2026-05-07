import {useEffect, useState} from "react";
import type {IUserDummy, UsersResp} from "../models/IUserDummy.ts";
import {userDummyData} from "../services/api.service.ts";
import {UserDummyComponent} from "./children-components/dummy/user/UserDummyComponent.tsx";

export const UsersDummyComponent = () => {
    const [users, setUsers] = useState<IUserDummy[]>([])

useEffect(() => {
    userDummyData.getDummyUsers()
        .then((allUsersDummy: UsersResp) => {
            setUsers(allUsersDummy.users)
        })
},[])
    return (
<div>
    {users.map((user) => <UserDummyComponent key={user.id} item={user}/>)}
</div>
    )
};