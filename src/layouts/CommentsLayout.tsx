import {Link, Outlet} from "react-router";
import "./LayoutStyle.css"

export const CommentsLayout=()=>{
    return(
        <div className="layout">
            <h2 className="title">Comments Section</h2>
            <section className="navigation">
                <Link to={'jsonplaceholder'}>JsonComments</Link>
                <Link to={'dummyjson'}>DummyComments</Link>
            </section>

            <div className="content"><Outlet/></div>
        </div>
    )
}