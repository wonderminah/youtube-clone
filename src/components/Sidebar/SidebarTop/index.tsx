import type { SidebarSection } from "../../../mocks/sidebarSections"
import SidebarMenuItem from "../SidebarMenuItem"

const SidebarTop = ({ section }: { section: SidebarSection }) => {
  return (
    <div>
      {section.items.map((item, index) => (
        <SidebarMenuItem key={index} iconNode={item.iconNode} name={item.name} />
      ))}
    </div>
  )
}

export default SidebarTop
