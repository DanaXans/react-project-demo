import {Link, Outlet} from "react-router";
import "./LayoutStyle.css"

export const UsersLayout = () => {
    return (

        <div className="layout">
            <h2 className="title">Users Section</h2>
            <section className="navigation">
                <Link to={'jsonplaceholder'}>JsonUsers</Link>
                <Link to={'dummyjson'}>DummyUsers</Link>
            </section>

            <div className="content"><Outlet/></div>

        </div>
    )
}