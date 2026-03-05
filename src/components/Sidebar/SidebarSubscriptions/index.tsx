import type { Channel } from "../../../types/channel"
import SidebarTitle from "../SidebarTitle"
import SidebarSubscribedChannelItem from "../SidebarSubscribedChannelItem"

const SidebarSubscribedChannels = ({ subscribedChannels }: { subscribedChannels: Channel[] }) => {
  return (
    <div>
      <SidebarTitle title="Subscriptions" />
      {subscribedChannels.map((subscribedChannel, index) => (
        <SidebarSubscribedChannelItem key={index} subscribedChannel={subscribedChannel} />
      ))}
    </div>
  )
}

export default SidebarSubscribedChannels
