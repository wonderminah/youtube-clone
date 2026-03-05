
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage';
import Shorts from './pages/ShortsPage';
import Channel from './pages/ChannelPage';
import Video from './pages/VIdeoPage';
import Header from './components/Header';

function App() {
    /**
     * createBrowserRouter는 App 안에서 인라인으로 써도 동작은 하지만
     * 그 경우 렌더링마다 새로 호출하게 되므로,
     * 보통은 이와 같이 컴포넌트 바깥에 상수로 빼는 게 권장됩니다.
     */
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

    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    )
}

export default App;
