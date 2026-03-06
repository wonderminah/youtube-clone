type Props = {
  title: string
}

const SidebarSectionTitle = ({ title }: Props) => {
  return (
    <div id="sidebar-section-title" style={{ display: "flex", alignItems: "center", height: "40px", padding: "0 8px" }}>
      <div style={{ fontSize: "16px", fontWeight: "500" }}>{title}</div>
    </div>
  )
}

export default SidebarSectionTitle
