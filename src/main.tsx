import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Route.tsx";

createRoot(document.getElementById('root')!)

    .render(<RouterProvider router={routes}></RouterProvider>)
