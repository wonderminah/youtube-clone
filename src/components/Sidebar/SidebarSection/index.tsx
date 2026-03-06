import type { SidebarSectionData } from "../../../constants/sidebarSections"
import SidebarSectionTitle from "../SidebarSectionTitle"
import SidebarSectionItem from "../SidebarSectionItem"
import styles from "./SidebarSection.module.css"

type Props = {
  section: SidebarSectionData
}

const SidebarSection = ({ section }: Props) => {
  return (
    <div id="sidebar-section" className={styles.sidebarSection}>
      {section.title && <SidebarSectionTitle title={section.title} />}
      {section.items.map((item, index) => (
        <SidebarSectionItem key={index} item={item} />
      ))}
    </div>
  )
}

export default SidebarSection
