import { useParams } from "react-router-dom";

const ShortsDetail = () => {
    const { id } = useParams();

    return <div>Shorts! id: {id}</div>
}

export default ShortsDetail;