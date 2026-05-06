import {Outlet} from "react-router";
import {Menu} from "./components/menu-component/Menu.tsx";

export const Layout = () => {
    return (
        <>
        <div>
            <Menu/>
            <hr/>
        </div>
            <Outlet/>
        </>
    );
};