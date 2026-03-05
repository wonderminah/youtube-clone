import VideoFilterBar from "../components/Main/Home/VideoFilterBar";
import VideoGrid from "../components/Main/Home/VideoGrid";
import { mockVideos } from "../mocks/videos";
import Sidebar from "../components/Sidebar";
const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div>
        <VideoFilterBar />
        <VideoGrid videos={mockVideos} />
      </div>
    </div>
  );
};

export default HomePage;