import {Link} from "react-router";

export const PostsComponent = () => {
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