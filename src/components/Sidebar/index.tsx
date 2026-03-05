import { Fragment } from "react"
import styles from "./Sidebar.module.css"
import { mockSubscriptions } from "../../mocks/subscriptions"
import SidebarMenuItem from "./SidebarMenuItem"
import SidebarTitle from "./SidebarTitle"
import SidebarChannelItem from "./SidebarChannelItem"
import { sidebarSections } from "../../mocks/sidebarSections"

const Sidebar = () => {
  return (
    <div id="sidebar" className={styles.sidebarContainer}>
      {sidebarSections.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          <div className={styles.sidebarSection}>
            {section.title &&
              <SidebarTitle title={section.title} />
            }
            {section.items.map((item, itemIndex) => (
              <SidebarMenuItem key={itemIndex} iconNode={item.iconNode} name={item.name} />
            ))}
          </div>

          {/* Subscriptions 섹션을 표시 */}
          {sectionIndex === 0 && (
            <div className={styles.sidebarSection}>
              <SidebarTitle title="Subscriptions" />
              {mockSubscriptions.map((subscribedChannel, index) => (
                <SidebarChannelItem key={index} channel={subscribedChannel} />
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Sidebar
