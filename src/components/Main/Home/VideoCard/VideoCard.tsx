import type { Video } from "../../../../types/video"
import "./VideoCard.css"

const VideoCard = ({ video }: { video: Video }) => {
    return (
        <div className="video-card-container">
            {/* 썸네일 */}
            <div className="video-card-thumbnail">
                <img src={video.thumbnailUrl} />
            </div>
            {/* 카드 */}
            <div className="video-card-info">
                {/* 로고 */}
                <div className="video-card-avatar">
                    <img src="https://yt3.ggpht.com/by9Fh1prHd_mmc52XM3nscTy2U7qssX0D3sE4w2e6OQAIlEz3wE3MRFImIk9L-xoWtSSYmgkQg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                {/* 상세 */}
                <div>
                    <div>
                        <span className="video-card-title">{video.title}</span>
                    </div>
                    <div>
                        <span className="video-card-meta">{video.channelName}</span>
                    </div>
                    <div>
                        <span className="video-card-meta">{video.viewCount}</span>
                        <span className="video-card-meta"> • </span>
                        <span className="video-card-meta">{video.uploadedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
