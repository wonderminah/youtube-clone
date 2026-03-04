import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import './App.css'
import Header from "./components/Header/Header";
import { HEADER_HEIGHT } from "./constants/layout";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      <div style={{ display: "flex", paddingTop: `${HEADER_HEIGHT}px` }}>
        <Sidebar />
        <div>
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App;
