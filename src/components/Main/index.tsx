import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/HomePage";
import Video from "../../pages/VIdeoPage";
import Shorts from "../../pages/ShortsPage";
import Channel from "../../pages/ChannelPage";

const Main = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/video/:id",
            element: <Video />
        },
        {
            path: "/shorts/:id",
            element: <Shorts />
        },
        {
            path: "/channel/:id",
            element: <Channel />
        }
    ])

    return <RouterProvider router={router} />
}

export default Main;