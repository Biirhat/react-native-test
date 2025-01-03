import { router } from "expo-router";
import { ChannelList } from "stream-chat-expo";
import { Channel } from "stream-chat";

export default function MainTabScreen() {
  const handleChannelSelect = (channel: Channel) => {
    router.push({
      pathname: "/(home)/Channel/[cid]",
      params: { cid:channel.id}
    });
  };

  return (
    <ChannelList
      onSelect={handleChannelSelect}
    />
  );
}