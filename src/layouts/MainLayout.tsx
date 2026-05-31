import {Outlet} from "react-router-dom";
import {Menu} from "../components/Menu.tsx";

export const MainLayout = () => {//відповідає за відображення Menu та дочірніх елементів
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};