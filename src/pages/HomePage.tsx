import VideoCard from "../components/Main/Home/VideoCard";
import CategoryTab from "../components/Main/Home/CategoryTab";
import { mockVideos } from "../mocks/videos";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const HomePage = () => {
  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 레이아웃 */}
      <div style={{ display: "flex" }}>

        {/* 사이드바 */}
        <Sidebar />

        {/* 메인화면 */}
        <div>
          {/* 그리드버튼 */}
          <CategoryTab />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            // gap: "15px",
            flex: 1,
            minWidth: 0,
            padding: "24px 0px 0px 0px"
          }}>
            {/* 썸네일카드 */}
            {mockVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;