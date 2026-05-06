import {Link} from "react-router";

export const PostsComponent = () => {
    return (
        <ul>
            <li>
                <Link to="jsonplaceholder">Posts Of Jsonplaceholder</Link>
            </li>
            <li>
                <Link to="dummyjson">Posts Of Dummyjson</Link>
            </li>
        </ul>
    );
};