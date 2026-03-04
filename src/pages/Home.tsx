import VideoCard from "../components/Contents/VideoCard";
import CategoryTabs from "../components/Contents/CategoryTabs";
import Sidebar from "../components/Sidebar/Sidebar";
import { mockVideos } from "../mocks/videos";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>

        {/* 사이드바 */}
        <Sidebar />

        {/* 메인화면 */}
        <div>
          {/* 그리드버튼 */}
          <CategoryTabs />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "15px",
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

export default Home;