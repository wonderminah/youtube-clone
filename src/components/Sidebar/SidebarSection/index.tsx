import type { SidebarSectionData } from "../../../constants/sidebarSections"
import SidebarSectionTitle from "../SidebarSectionTitle"
import SidebarSectionItem from "../SidebarSectionItem"
import styles from "./SidebarSection.module.css"

const SidebarSection = ({ section }: { section: SidebarSectionData }) => {
  return (
    <div className={styles.sidebarSection}>
      {section.title && <SidebarSectionTitle title={section.title} />}
      {section.items.map((item, index) => (
        <SidebarSectionItem key={index} item={item} />
      ))}
    </div>
  )
}

export default SidebarSection
