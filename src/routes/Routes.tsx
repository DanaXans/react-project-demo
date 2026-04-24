import {createBrowserRouter} from "react-router";

import {Layout} from "../Layout.tsx";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {CommentsComponent} from "../components/CommentsComponent.tsx";
import {DummyJson} from "../components/children-components/DummyJson.tsx";
import {JsonPlaceholder} from "../components/children-components/JsonPlaceholder.tsx";

export const Routes = createBrowserRouter([
    {
        path: "/", element: <Layout/>, children: [
            {path: "users", element: <UsersComponent/>},
            {path: 'users/jsonplaceholder', element: <JsonPlaceholder/>},
            {path: 'users/dummyjson', element: <DummyJson/>},
            {path: "posts", element: <PostsComponent/>},
            {path: 'posts/jsonplaceholder', element: <JsonPlaceholder/>},
            {path: 'posts/dummyjson', element: <DummyJson/>},
            {path: "comments", element: <CommentsComponent/>},
            {path: "comments/jsonplaceholder", element: <JsonPlaceholder/>}
        ]
    }])