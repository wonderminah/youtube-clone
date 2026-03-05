import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const VideoPage = () => {
  const { id } = useParams();

  return (
    <div style={{ display: "flex" }}>
      

      <div>
        VideoPage
      </div>
    </div>
  );
};

export default VideoPage;