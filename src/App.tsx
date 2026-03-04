
import './App.css'
import Header from "./layouts/Header";
import { HEADER_HEIGHT } from "./constants/layout";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";

function App() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      <div style={{ display: "flex", paddingTop: `${HEADER_HEIGHT}px` }}>
        <Sidebar />
        <div>
          <Main />
        </div>
      </div>
    </>
  )
}

export default App;
