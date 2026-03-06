import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ShortsPage = () => {
    const { id } = useParams();

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <div>
                ShortsPage {id}
            </div>
        </div>
    )
}

export default ShortsPage;