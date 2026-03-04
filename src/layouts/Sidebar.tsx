import { mockSubscribedChannels } from "../mocks/subscribedChannels"
import SidebarItem from "../components/SidebarItem"

const Sidebar = () => {
  return (
    <div style={{
      width: "240px",
      flexShrink: 0,
      padding: "12px",
    }}>
      {/* Home & Shorts */}
      <div>
        <SidebarItem iconUrl="" name="Home" />
        <SidebarItem iconUrl="" name="Shorts" />
      </div>

      {/* Subscriptions */}
      <div>
        <div style={{ display: "flex", alignItems: "center", height: '40px', padding: "0 8px" }}>
          <div style={{ fontSize: "16px", fontWeight: "500", WebkitFontSmoothing: "antialiased" }}>Subscriptions</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" focusable="false" aria-hidden="true"><path d="M8.793 5.293a1 1 0 000 1.414L14.086 12l-5.293 5.293a1 1 0 101.414 1.414L16.914 12l-6.707-6.707a1 1 0 00-1.414 0Z"></path></svg>
          </div>
        </div>
        {mockSubscribedChannels.map((channel, index) => (
          <SidebarItem key={index} iconUrl={channel.avatarUrl} name={channel.name} />
        ))}
      </div>

      {/* You */}
      <div></div>

      {/* Explore */}
      <div></div>

      {/* More from Youtube */}
      <div></div>

      {/* Settings & Etc */}
      <div></div>
    </div>
  )
}

export default Sidebar
