import type { Video } from "../../../../types/video"
import VideoCard from "./VideoCard"

type Props = {
  videos: Video[]
}

const VideoGrid = ({ videos }: Props) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", flex: 1, minWidth: 0 }}>
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  )
}

export default VideoGrid
