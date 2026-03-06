import { mockCategories } from "../../../../mocks/categories"

type Props = {
    selectedCategory: string
    onCategoryChange: (category: string) => void
}

const VideoFilterBar = ({ selectedCategory, onCategoryChange }: Props) => {
    return (
        <div id="video-filter-bar">
            <div style={{
                width: "100%",
                display: "flex",
                columnGap: "10px",
                alignItems: "center",
                whiteSpace: "nowrap",
                // margin: "12px 0px 12px 0px",
                // padding: "0px 8px"
            }}>
                {mockCategories.map((category) => (
                    <div
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        style={{
                            borderRadius: "8px",
                            padding: "6px 12px",
                            backgroundColor: selectedCategory === category ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.05)",
                            cursor: "pointer",
                        }}
                    >
                        <span style={{ fontSize: "14px", fontWeight: "500", color: selectedCategory === category ? "white" : "inherit" }}>{category}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VideoFilterBar
