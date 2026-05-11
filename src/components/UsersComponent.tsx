import {useEffect, useState} from "react";
import type {IUser} from "../models/dummy-user/IUser.ts";
import type {IResponseOfUser} from "../models/IResponseOfUsers.ts";
import {dummyUsers} from "../constants/base-urls.ts";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1'
        dummyUsers(currentPage)
            .then((allDummyUsers: IResponseOfUser) => {
                setUsers(allDummyUsers.users)
            })
    }, [searchParams])
    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};