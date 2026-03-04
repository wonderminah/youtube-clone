import type { Video } from "../../types/video"

const VideoCard = ({ video }: { video: Video }) => {
    return (
        <div>
            {/* 썸네일 */}
            <div style={{ padding: "0 0 12px 0" }}>
                <img style={{ width: "100%", borderRadius: "12px" }} src={video.thumbnailUrl} />
            </div>
            {/* 카드 */}
            <div style={{ display: "flex" }}>
                {/* 로고 */}
                <div style={{ width: "36px", margin: "0 12px 0 0" }}>
                    <img style={{ width: "100%", borderRadius: "50%" }} src="https://yt3.ggpht.com/by9Fh1prHd_mmc52XM3nscTy2U7qssX0D3sE4w2e6OQAIlEz3wE3MRFImIk9L-xoWtSSYmgkQg=s68-c-k-c0x00ffffff-no-rj"></img>
                </div>
                {/* 상세 */}
                <div>
                    <div><span style={{ fontSize: "16px", fontWeight: "500" }}>{video.title}</span></div>
                    <div>
                        <span style={{ fontSize: "14px", fontWeight: "400", color: "rgb(96, 96, 96)" }}>{video.channelName}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: "14px", fontWeight: "400", color: "rgb(96, 96, 96)" }}>{video.viewCount}</span>
                        <span style={{ fontSize: "14px", fontWeight: "400", color: "rgb(96, 96, 96)" }}> • </span>
                        <span style={{ fontSize: "14px", fontWeight: "400", color: "rgb(96, 96, 96)" }}>{video.uploadedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard