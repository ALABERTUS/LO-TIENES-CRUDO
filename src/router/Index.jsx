import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import CreateQueries from "../components/CreateQueries";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    
    },

    {
        path: "/create",
        element: <CreateQueries/>
    }
])