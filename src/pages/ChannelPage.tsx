import { useParams } from "react-router-dom";

const ChannelPage = () => {
    const { id } = useParams();

    return <div>ChannelPage! id: {id}</div>
}

export default ChannelPage;