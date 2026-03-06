import { useState } from "react";
import VideoFilterBar from "../components/Main/Home/VideoFilterBar";
import VideoGrid from "../components/Main/Home/VideoGrid";
import { mockVideos } from "../mocks/videos";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  // 선택된 카테고리 상태 ("All" 이면 전체 표시)
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 선택된 카테고리에 맞는 비디오만 필터링
  const filteredVideos = selectedCategory === "All"
    ? mockVideos
    : mockVideos.filter(v => v.category === selectedCategory);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div>
        <VideoFilterBar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <VideoGrid videos={filteredVideos} />
      </div>
    </div>
  );
};

export default HomePage;