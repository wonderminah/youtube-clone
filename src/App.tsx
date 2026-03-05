
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage';
import Shorts from './pages/ShortsPage';
import Channel from './pages/ChannelPage';
import Video from './pages/VIdeoPage';

function App() {
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

export default App;
