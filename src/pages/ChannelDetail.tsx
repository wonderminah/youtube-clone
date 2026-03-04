import { useParams } from "react-router-dom";

const ChannelDetail = () => {
    const { id } = useParams();

    return <div>ChannelDetail! id: {id}</div>
}

export default ChannelDetail;