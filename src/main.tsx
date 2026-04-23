import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes} from "react-router";
import {Route} from "react-router/internal/react-server-client";
import {UsersComponent} from "./components/UsersComponent.tsx";
import {PostsComponent} from "./components/PostsComponent.tsx";
import {CommentsComponent} from "./components/CommentsComponent.tsx";
import {ProductsComponent} from "./components/ProductsComponent.tsx";
import {Layout} from "./Layout.tsx";

createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<UsersComponent/>}/>
                <Route path={'posts'} element={<PostsComponent/>}/>
                <Route path={'comments'} element={<CommentsComponent/>}/>
                <Route path={'products'} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>);
