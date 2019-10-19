import React from "react";
import io from "socket.io-client";
import { axios } from "@helpers";

export const MessagesContext = React.createContext({});

export const withMessages = Component => props => {
  return (
    <MessagesContext.Consumer>
      {messagesProps => <Component {...props} {...messagesProps} />}
    </MessagesContext.Consumer>
  );
};

class MessagesProvider extends React.Component {
  state = {
    connection: undefined,
    channels: [],
    messages: [],
    selectedChannel: {},
    loadingChannel: true,
    user: {
      email: "",
      name: ""
    }
  };

  componentDidMount() {
    this.ioConnect();
  }

  async componentDidUpdate() {
    if (this.state.loadingChannel && this.state.connection) {
      this.setState({ loadingChannel: false });
      this.getChannels();
    }
  }

  ioConnect = async () => {
    const connection = io(`http://localhost:3433`);
    this.setState({ connection });
  };

  getChannels = async () => {
    try {
      const channels = (await axios.get("/channels")).data;
      this.setState({ channels, loading: false });
      if (!channels.length) return;
      this.selectChannel(channels[0].id);
    } catch (error) {
      console.error(error);
    }
  };

  selectChannel = id => {
    let selectedChannel = this.state.channels.find(
      channel => channel.id === id
    );
    const channel = `channel-${id}`;
    selectedChannel = { ...selectedChannel, channelId: channel };
    this.setState({ selectedChannel });
    this.connectWithChannel(channel);
  };

  connectWithChannel = channel => {
    const { connection } = this.state;
    connection.emit("subscribe", channel);
    connection.on("message", data => {
      console.log(data);
    });
  };

  sendMessage = message => {
    const { connection } = this.state;
    const { selectedChannel } = this.state;
    connection.emit("send", {
      channel: selectedChannel.channelId,
      message: message
    });
  };

  render() {
    const { channels, selectedChannel } = this.state;
    const { children } = this.props;
    return (
      <MessagesContext.Provider
        value={{
          channels,
          selectedChannel,
          sendMessage: this.sendMessage,
          selectChannel: this.selectChannel
        }}
      >
        {children}
      </MessagesContext.Provider>
    );
  }
}

export default MessagesProvider;
