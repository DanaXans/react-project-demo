import {Link} from "react-router";

export const CommentsComponent = () => {
    return (
        <ul>
            <li>
                <Link to="jsonplaceholder">Comments Of Jsonplaceholder</Link>
            </li>
            <li>
                <Link to="dummyjson">Comments Of Dummyjson</Link>
            </li>
        </ul>
    );
};