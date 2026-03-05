import { useParams } from "react-router-dom";

const ShortsPage = () => {
    const { id } = useParams();

    return <div>ShortsPage! id: {id}</div>
}

export default ShortsPage;