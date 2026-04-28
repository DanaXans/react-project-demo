import {createBrowserRouter} from "react-router";

import {Layout} from "../Layout.tsx";
import {UsersComponent} from "../pages/UsersComponent.tsx";
import {PostsComponent} from "../pages/PostsComponent.tsx";
import {CommentsComponent} from "../pages/CommentsComponent.tsx";
import {HomePage} from "../pages/HomePage.tsx";
// import {DummyJson} from "../components/children-components/DummyJson.tsx";
// import {JsonPlaceholder} from "../components/children-components/JsonPlaceholder.tsx";

export const Routes = createBrowserRouter([
    {
        path: "/", element: <Layout/>, children: [
            {index:true, element:<HomePage/>},
            {path: "users", element: <UsersComponent/>},
            {path: "posts", element: <PostsComponent/>},
            {path: "comments", element: <CommentsComponent/>},
        ]
    }])