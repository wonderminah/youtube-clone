import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { id } = useParams();

  return <div>Video Detail: {id}</div>;
};

export default VideoDetail;