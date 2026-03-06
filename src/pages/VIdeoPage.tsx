import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoFilterBar from "../components/Main/Home/VideoFilterBar";
import VideoGrid from "../components/Main/Home/VideoGrid";
import { mockVideos } from "../mocks/videos";
import VideoCard from "../components/Main/Home/VideoGrid/VideoCard";

const VideoPage = () => {
  const { id } = useParams();

  return (
    <div style={{ display: "flex", columnGap: "15px" }}>
      
      {/* 비디오 및 코멘트 부분 */}
      <div style={{ flex: "1" }}>
        <video controls style={{ width: "100%" }} src={mockVideos.find(v => v.id === id)?.videoUrl} />
        <div>코멘트</div>
      </div>

      {/* 동영상 및 쇼츠 세로 리스트 부분 */}
      
      <div style={{ width: "420px" }}>
        <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
          {mockVideos.map((video, index) => (
            // 비디오 별 컬럼
            <div style={{ display: "flex", gap: "10px" }}>
              {/* 썸네일 컨테이너 */}
              <a href={`/video/${video.id}`}>
                <img src={video.thumbnailUrl} style={{ flex: "4", width: "140px", borderRadius: "10px" }}></img>
              </a>
              {/* 정보 컨테이너 */}
              <div style={{ flex: "6" }}>
                <div>{video.id}</div>
                <div>{video.title}</div>
                <div style={{ display: "flex" }}>
                  <div>{video.channelName}</div>
                  <div> ・ </div>
                  <div>{video.viewCount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;