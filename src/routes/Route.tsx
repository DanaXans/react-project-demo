import {createBrowserRouter} from "react-router";
import {Layout} from "../Layout.tsx";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {CommentsComponent} from "../components/CommentsComponent.tsx";
import {ProductsComponent} from "../components/ProductsComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children: [
            {path: 'users', element: <UsersComponent/>},
            {path: 'posts', element: <PostsComponent/>},
            {path: 'comments', element: <CommentsComponent/>},
            {path: 'products', element: <ProductsComponent/>}
        ]
    }
])
