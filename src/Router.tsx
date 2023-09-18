import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { TestForm } from "./Components/TestForm";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                index: true
            }, 
            {
                path: "/test",
                element: <TestForm></TestForm>
            }

        ]
    }
]) 