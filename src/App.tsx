
import './App.css';
import Header from './components/Header/Header';
import { HEADER_HEIGHT } from './constants/layout';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

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
