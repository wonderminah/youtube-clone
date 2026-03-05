const SidebarTitle = ({ title }: { title: string }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "40px", padding: "0 8px" }}>
      <div style={{ fontSize: "16px", fontWeight: "500", WebkitFontSmoothing: "antialiased" }}>{title}</div>
    </div>
  )
}

export default SidebarTitle
