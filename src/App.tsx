import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import './App.css'
import Header from "./components/Header/Header";
import { HEADER_HEIGHT } from "./constants/layout";

function App() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      <div style={{ paddingTop: `${HEADER_HEIGHT}px` }}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
