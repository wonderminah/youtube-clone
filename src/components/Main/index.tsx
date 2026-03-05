import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Video from "./Video";
import Shorts from "./Shorts";
import Channel from "./Channel";

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