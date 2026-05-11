import {createBrowserRouter} from "react-router";
import {UsersPage} from "../pages/UsersPage.tsx";
import App from "../App.tsx";


export const routes = createBrowserRouter([{
    path: '/', element: <App/>, children: [
        {
                path: 'users', element: <UsersPage/>
        }
    ]
}
]);