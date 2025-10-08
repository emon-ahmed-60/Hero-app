import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import LoadingSpinner from "../Components/LoadingSpinner";
import CardDetails from "../Pages/CardDetails";

const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        errorElement:<ErrorPage/>,
        hydrateFallbackElement:<LoadingSpinner/>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/apps",
                Component:Apps
            },
            {
                path:"/apps/:id",
                Component:CardDetails
            },
            {
                path:"/installation",
                Component:Installation
            },
        ]
    }
])

export default router;