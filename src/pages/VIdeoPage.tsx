import { useState } from "react";
import { useParams } from "react-router-dom";
import VideoFilterBar from "../components/Main/Home/VideoFilterBar";
import { mockVideos } from "../mocks/videos";
import useComments from "../hooks/useComments";

const VideoPage = () => {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { comments, addComment } = useComments(id ?? "");
  const [commentInput, setCommentInput] = useState("");

  const filteredVideos = selectedCategory === "All"
    ? mockVideos
    : mockVideos.filter(v => v.category === selectedCategory);

  const video = mockVideos.find(v => v.id === id);

  return (
    <div style={{ display: "flex", columnGap: "15px" }}>

      {/* 비디오 및 코멘트 부분 */}
      <div style={{ flex: "1" }}>
        <video controls style={{ width: "100%" }} src={video.videoUrl} />
        <div>
          <h1 style={{ fontSize: "24px", margin: "0" }}>{video.title}</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>로고</div>
            <div>
              <div>채널명</div>
              <div>구독자수</div>
            </div>
            <div>알림버튼</div>
            <div>좋아요 및 싫어요 버튼</div>
            <div>공유 버튼</div>
            <div>쩜쩜쩜 버튼</div>
          </div>
        </div>
        {/* 댓글 */}
        <div>
          {/* 입력창 */}
          <div style={{ display: "flex", gap: "8px", margin: "16px 0" }}>
            <input
              value={commentInput}
              onChange={e => setCommentInput(e.target.value)}
              placeholder="댓글 달기..."
              style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <button
              onClick={() => { addComment(commentInput); setCommentInput("") }}
              style={{ padding: "8px 16px" }}
            >
              등록
            </button>
          </div>

          {/* 댓글 목록 */}
          {comments.map(comment => (
            <div key={comment.id} style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
              <div style={{ fontWeight: 500 }}>{comment.authorName}</div>
              <div style={{ flex: 1 }}>
                <div>{comment.content}</div>
                <div style={{ fontSize: "12px", color: "gray" }}>{comment.createdAt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 동영상 및 쇼츠 세로 리스트 부분 */}
      <div style={{ width: "420px" }}>
        <VideoFilterBar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
          {filteredVideos.map((video) => (
            // 비디오 별 컬럼
            <div key={video.id} style={{ display: "flex", gap: "10px" }}>
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