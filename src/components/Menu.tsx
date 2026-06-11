import {Link} from "react-router-dom";
import './Menu.css'

export const Menu = () => {
    return (
        <header className="menu">
            <ul className="menu__list">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
                <li><Link to={'/complex'}>Complex</Link></li>
            </ul>
        </header>
    );
};