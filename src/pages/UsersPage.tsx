import {useEffect} from 'react';
import {fetchUsers} from "../store/usersSlice.ts";
import {useAppDispatch, useAppSelector} from '../store/hooks';

export function UsersPage() {
    const dispatch = useAppDispatch();
    const {items: users, loading, error} = useAppSelector(state => state.users);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers());
        }
    }, [dispatch, users.length]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Users</h1>

            {users.map(user => (
                <div className="card" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))}
        </div>
    );
}