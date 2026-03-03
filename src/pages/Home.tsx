import VideoCard from "../components/VideoCard";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>

        {/* 사이드바 */}
        <div style={{
          width: "250px",
          // flexShrink: 0 // width: "400px"는 설정되어 있는데, flexShrink 때문에 줄어드는 겁니다. flex 컨테이너 안에서 공간이 부족하면 기본적으로 자식이 shrink되거든요.
        }}>
          {/* Home & Shorts */}
          <div>
            <div>Home</div>
            <div>Shorts</div>
          </div>

          {/* Subscriptions */}
          <div>
            {/* 구독 1 */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: "1" }}>로고</div>
              <div style={{ flex: "2" }}>채널명</div>
              <div style={{ flex: "1" }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: "none", display: "inherit", width: "100%", height: "100%" }}>
                  <path d="M4.222 4.223a11 11 0 000 15.555 1 1 0 101.414-1.414 9 9 0 010-12.727 1 1 0 10-1.414-1.414Zm13.79.353a1 1 0 000 1.414 8.5 8.5 0 010 12.022 1 1 0 001.413 1.414 10.501 10.501 0 000-14.85 1 1 0 00-1.413 0Zm-2.83 2.827a1 1 0 000 1.414 4.501 4.501 0 010 6.365 1.001 1.001 0 001.414 1.414 6.5 6.5 0 000-9.193 1 1 0 00-1.415 0Zm-7.78 0a6.5 6.5 0 000 9.194 1 1 0 001.415-1.415 4.5 4.5 0 010-6.364 1.001 1.001 0 00-1.415-1.415ZM12 10a2 2 0 100 4 2 2 0 000-4Z" />
                </svg>
              </div>
            </div>

            {/* 구독 2 */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: "1" }}>로고</div>
              <div style={{ flex: "2" }}>채널명</div>
              <div style={{ flex: "1" }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: "none", display: "inherit", width: "100%", height: "100%" }}>
                  <path d="M4.222 4.223a11 11 0 000 15.555 1 1 0 101.414-1.414 9 9 0 010-12.727 1 1 0 10-1.414-1.414Zm13.79.353a1 1 0 000 1.414 8.5 8.5 0 010 12.022 1 1 0 001.413 1.414 10.501 10.501 0 000-14.85 1 1 0 00-1.413 0Zm-2.83 2.827a1 1 0 000 1.414 4.501 4.501 0 010 6.365 1.001 1.001 0 001.414 1.414 6.5 6.5 0 000-9.193 1 1 0 00-1.415 0Zm-7.78 0a6.5 6.5 0 000 9.194 1 1 0 001.415-1.415 4.5 4.5 0 010-6.364 1.001 1.001 0 00-1.415-1.415ZM12 10a2 2 0 100 4 2 2 0 000-4Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* You */}
          <div></div>

          {/* Explore */}
          <div></div>

          {/* More from Youtube */}
          <div></div>

          {/* Settings & Etc */}
          <div></div>
        </div>

        {/* 메인화면 */}
        <div>
          {/* 그리드버튼 */}
          <div style={{
            width: "100%",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>All</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>News</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Music</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Podcasts</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Radio Star</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Mixes</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Variety shows</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Live</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Falling in love</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Playlists</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Dance-pop</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Cooking shows</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Tourism</div>
            {/* <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Asian music</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Recently uploaded</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>Watched</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>New to you</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>New to you</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>New to you</div>
            <div style={{ borderRadius: "8px", padding: "4px 8px 4px 8px" }}>New to you</div> */}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
            flex: 1,
            minWidth: 0
          }}>
            {/* 썸네일카드 */}
            <VideoCard></VideoCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;