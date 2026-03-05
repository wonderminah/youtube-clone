import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar";

const VideoPage = () => {
  const { id } = useParams();

  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 레이아웃 */}
      <div style={{ display: "flex" }}>

        {/* 메인화면 */}
        <div>
          VideoPage: {id}
        </div>
      </div>
    </>
  );
};

export default VideoPage;