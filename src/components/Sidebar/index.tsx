import { Fragment } from "react"
import "./Sidebar.module.css"
import { mockSubscriptions } from "../../mocks/subscriptions"
import SidebarItem from "./SidebarSections/SidebarItem"
import SidebarTitle from "./SidebarSections/SidebarTitle"
import { sidebarSections } from "./SidebarSections/sidebarSections"

const Sidebar = () => {
  return (
    <div style={{
      width: "240px",
      flexShrink: 0,
      padding: "12px",
    }}>
      {sidebarSections.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          <div className="sidebar-section">
            {section.title && <SidebarTitle title={section.title} />}
            {section.items.map((item, itemIndex) => (
              <SidebarItem key={itemIndex} iconNode={item.iconNode} name={item.name} />
            ))}
          </div>

          {/* Subscriptions 섹션을 표시 */}
          {sectionIndex === 0 && (
            <div className="sidebar-section">
              <SidebarTitle title="Subscriptions" />
              {mockSubscriptions.map((channel, index) => (
                <SidebarItem key={index} imgUrl={channel.avatarUrl} name={channel.name} hasNewVideo={channel.hasNewVideo} />
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Sidebar
