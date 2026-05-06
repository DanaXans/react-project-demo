import {createBrowserRouter} from "react-router";
import {Layout} from "../Layout.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {UsersComponent} from "../pages/UsersComponent.tsx";
import {PostsComponent} from "../pages/PostsComponent.tsx";
import {CommentsComponent} from "../pages/CommentsComponent.tsx";

import {UserJsonPage} from "../pages/children-pages/UserJsonPage.tsx";
import {UserDummyPage} from "../pages/children-pages/UserDummyPage.tsx";
import {PostJsonPage} from "../pages/children-pages/PostJsonPage.tsx";
import {PostDummyPage} from "../pages/children-pages/PostDummyPage.tsx";
import {CommentJsonPage} from "../pages/children-pages/CommentJsonPage.tsx";
import {CommentsDummyPage} from "../pages/children-pages/CommentsDummyPage.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: "users", element: <UsersComponent/>},
            {path: "users/jsonplaceholder", element: <UserJsonPage/>},
            {path: "users/dummyjson", element: <UserDummyPage/>},
            {path: "posts", element: <PostsComponent/>},
            {path: "posts/jsonplaceholder", element: <PostJsonPage/>},
            {path: "posts/dummyjson", element: <PostDummyPage/>},
            {path: "comments", element: <CommentsComponent/>},
            {path: "comments/jsonplaceholder", element: <CommentJsonPage/>},
            {path: "comments/dummyjson", element: <CommentsDummyPage/>}
        ]
    }])