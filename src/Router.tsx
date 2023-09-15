import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                index: true
            }
        ]
    }
]) 