import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import VideoDetail from "../pages/VideoDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/video/:id",
        element: <VideoDetail />
    }
])