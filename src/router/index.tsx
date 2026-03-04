import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import VideoDetail from "../pages/VideoDetail";
import ShortsDetail from "../pages/ShortsDetail";
import ChannelDetail from "../pages/ChannelDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/video/:id",
        element: <VideoDetail />
    },
    {
        path: "/shorts/:id",
        element: <ShortsDetail />
    },
    {
        path: "/channel/:id",
        element: <ChannelDetail />
    }
])