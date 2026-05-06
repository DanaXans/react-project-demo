import {Link} from "react-router";

export const UsersComponent = () => {
    return (

        <div>
            <ul>
                <li>
                    <Link to="jsonplaceholder">Users Of Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">Users Of Dummyjson</Link>
                </li>
            </ul>
        </div>
    );
};