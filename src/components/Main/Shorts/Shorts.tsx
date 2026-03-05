import { useParams } from "react-router-dom";

const Shorts = () => {
    const { id } = useParams();

    return <div>Shorts! id: {id}</div>
}

export default Shorts;