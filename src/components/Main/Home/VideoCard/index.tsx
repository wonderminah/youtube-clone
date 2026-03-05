import type { Video } from "../../../../types/video"
import styles from "./VideoCard.module.css"

const VideoCard = ({ video }: { video: Video }) => {
    return (
        <div className={styles.videoCardContainer}>
            {/* 썸네일 */}
            <div className={styles.videoCardThumbnail}>
                <a href={`/video/${video.id}`}>
                    <img src={video.thumbnailUrl} />
                </a>
            </div>
            {/* 카드 */}
            <div className={styles.videoCardInfo}>
                {/* 로고 */}
                <div className={styles.videoCardAvatar}>
                    <img src="https://yt3.ggpht.com/by9Fh1prHd_mmc52XM3nscTy2U7qssX0D3sE4w2e6OQAIlEz3wE3MRFImIk9L-xoWtSSYmgkQg=s68-c-k-c0x00ffffff-no-rj" />
                </div>
                {/* 상세 */}
                <div>
                    <div>
                        <span className={styles.videoCardTitle}>{video.title}</span>
                    </div>
                    <div>
                        <span className={styles.videoCardMeta}>{video.channelName}</span>
                    </div>
                    <div>
                        <span className={styles.videoCardMeta}>{video.viewCount}</span>
                        <span className={styles.videoCardMeta}> • </span>
                        <span className={styles.videoCardMeta}>{video.uploadedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
