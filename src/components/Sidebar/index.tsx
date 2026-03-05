import styles from "./Sidebar.module.css"
import { mockSubscribedChannels } from "../../mocks/subscriptions"
import { sidebarSections } from "../../mocks/sidebarSections"
import SidebarTop from "./SidebarTop"
import SidebarSubscriptions from "./SidebarSubscriptions"
import SidebarBottom from "./SidebarBottom"

const Sidebar = () => {
  return (
    <div id="sidebar" className={styles.sidebarContainer}>
      <SidebarTop section={sidebarSections[0]} />
      <SidebarSubscriptions subscribedChannels={mockSubscribedChannels} />
      <SidebarBottom sections={sidebarSections.slice(1)} />
    </div>
  )
}

export default Sidebar
