import {Link} from "react-router/internal/react-server-client";

export const UsersComponent = () => {
    return (
        <ul>
            <li>
                <Link to="jsonplaceholder">jsonplaceholder</Link>
            </li>
            <li>
                <Link to="dummyjson">dummyjson</Link>
            </li>
        </ul>
    );
};