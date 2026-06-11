import * as React from "react";
import {createRoot} from 'react-dom/client'
import './index.css'
import {router} from "./routes/router.tsx";
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
