import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ChannelPage = () => {
    const { id } = useParams();

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <div>
                ChannelPage {id}
            </div>
        </div>
    )
}

export default ChannelPage;