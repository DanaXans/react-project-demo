import {createBrowserRouter} from "react-router";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {UsersLayout} from "../layouts/UsersLayout.tsx";
import {UserJsonPage} from "../pages/children-pages/UserJsonPage.tsx";
import {UserDummyPage} from "../pages/children-pages/UserDummyPage.tsx";
import {PostsLayout} from "../layouts/PostsLayout.tsx";
import {PostJsonPage} from "../pages/children-pages/PostJsonPage.tsx";
import {PostDummyPage} from "../pages/children-pages/PostDummyPage.tsx";
import {CommentJsonPage} from "../pages/children-pages/CommentJsonPage.tsx";
import {CommentsDummyPage} from "../pages/children-pages/CommentsDummyPage.tsx";
import {CommentsLayout} from "../layouts/CommentsLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {
                path: "users", element: <UsersLayout/>, children: [
                    {path: "jsonplaceholder", element: <UserJsonPage/>},
                    {path: "dummyjson", element: <UserDummyPage/>}]
            },
            {
                path: "posts", element: <PostsLayout/>, children: [
                    {path: "jsonplaceholder", element: <PostJsonPage/>},
                    {path: "dummyjson", element: <PostDummyPage/>}]
            },
            {
                path: "comments", element: <CommentsLayout/>, children: [
                    {path: "jsonplaceholder", element: <CommentJsonPage/>},
                    {path:"dummyjson",element:<CommentsDummyPage/>}]
            }
        ]
    }])