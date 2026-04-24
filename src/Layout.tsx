import {Outlet} from "react-router";
import {Menu} from "./components/Menu.tsx";

export const Layout = () => {
    return (
        <>
            <div><Menu/></div>
            <Outlet/>
        </>
    );
};