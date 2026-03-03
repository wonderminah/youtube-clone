import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import './App.css'

function App() {
  return (
    <>
      {/* 헤더 */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}>
        {/* start */}
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <div>[햄버거버튼]</div>
          <div>[로고]</div>
        </div>
        {/* center */}
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <div>[검색창]</div>
          <div>[마이크버튼]</div>
        </div>
        {/* end */}
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <div>[+Create]</div>
          <div>[알림]</div>
          <div>[프로필]</div>
        </div>
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App;