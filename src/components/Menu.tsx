import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/auth/resources'}>Resources</Link></li>
                <hr></hr>
            </ul>
        </div>
    );
};
//Home-це домашня сторінка
//Login-при переході підтягує токен користувача (в іншому випадку тут була б форма логінації)
//Resources-при успішній авторизації будуть відображені елементи, що належать користувачу