import {Link, Outlet} from "react-router";
import "./LayoutStyle.css"

export const PostsLayout = () => {
    return (
        <div className="layout">
            <h2 className="title">Posts Section</h2>
            <section className="navigation">
                <Link to={'jsonplaceholder'}>JsonPosts</Link>
                <Link to={'dummyjson'}>DummyPosts</Link>
            </section>

            <div className="content"><Outlet/></div>
        </div>

    )
}