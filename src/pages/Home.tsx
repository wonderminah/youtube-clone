import VideoCard from "../components/VideoCard";
import CategoryTabs from "../components/CategoryTabs";
import { mockVideos } from "../mocks/videos";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>

        {/* 메인화면 */}
        <div>
          {/* 그리드버튼 */}
          <CategoryTabs />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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