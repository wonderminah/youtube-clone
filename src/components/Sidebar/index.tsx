import styles from "./Sidebar.module.css"
import { SIDEBAR_SECTIONS, type SidebarSectionData } from "../../constants/sidebarSections"
import { mockSubscribedChannels } from "../../mocks/subscriptions"
import SidebarSection from "./SidebarSection"

const subscriptionsSection: SidebarSectionData = {
  title: "Subscriptions",
  items: mockSubscribedChannels.map(ch => ({
    name: ch.name,
    icon: ch.avatarUrl,
    href: `/channel/${ch.id}`,
    hasNewVideo: ch.hasNewVideo,
  }))
}

const ALL_SECTIONS: SidebarSectionData[] = [
  SIDEBAR_SECTIONS[0],
  subscriptionsSection,
  ...SIDEBAR_SECTIONS.slice(1),
]

const Sidebar = () => {
  return (
    <div id="sidebar" className={styles.sidebarContainer}>
      {ALL_SECTIONS.map((section, index) => (
        <SidebarSection key={index} section={section} />
      ))}
    </div>
  )
}

export default Sidebar
