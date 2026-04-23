import {Menu} from "./components/menu-component/Menu.tsx";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <>this is layout

            <div><Menu/></div>
            <Outlet/>
        </>
    );
};