import { mockCategories } from "../mocks/categories"

const CategoryTabs = () => {
    return (
        <div>
            <div style={{
                width: "100%",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                whiteSpace: "nowrap",
                margin: "12px 0px 12px 0px"
            }}>
                {mockCategories.map((category) => (
                    <div key={category} style={{ borderRadius: "8px", padding: "6px 12px 6px 12px", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                        <span style={{ fontSize: "14px", fontWeight: "500" }}>{category}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryTabs
