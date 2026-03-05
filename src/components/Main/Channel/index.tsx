import { useParams } from "react-router-dom";

const Channel = () => {
    const { id } = useParams();

    return <div>ChannelDetail! id: {id}</div>
}

export default Channel;