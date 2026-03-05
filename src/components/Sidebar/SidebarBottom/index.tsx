import type { SidebarSection } from "../../../mocks/sidebarSections"
import SidebarMenuItem from "../SidebarMenuItem"
import SidebarTitle from "../SidebarTitle"

const SidebarBottom = ({ sections }: { sections: SidebarSection[] }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          {section.title && <SidebarTitle title={section.title} />}
          {section.items.map((item, itemIndex) => (
            <SidebarMenuItem key={itemIndex} iconNode={item.iconNode} name={item.name} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default SidebarBottom
