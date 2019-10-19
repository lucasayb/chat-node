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
    user: undefined
  };

  componentDidMount() {
    this.ioConnect();
  }

  async componentDidUpdate() {
    if (this.state.loadingChannel && this.state.connection && this.state.user) {
      this.setState({ loadingChannel: false });
      this.getChannels();
    }
  }

  ioConnect = async () => {
    const connection = io();
    this.setState({ connection });
    connection.on("message", data => {
      let messages = this.state.messages;
      messages.push(data);
      this.setState({ messages: messages });
    });
    connection.on("loadMessages", data => {
      this.setState({ messages: data.messages });
    });
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
    if (this.state.selectedChannel) {
      this.disconnectWithChannel(this.state.selectedChannel.id);
    }
    let selectedChannel = this.state.channels.find(
      channel => channel.id === id
    );
    this.setState({ selectedChannel, messages: selectedChannel.messages });
    this.connectWithChannel(selectedChannel.id);
  };

  connectWithChannel = channel => {
    const { connection } = this.state;
    connection.emit("subscribe", channel);
  };

  disconnectWithChannel = channel => {
    const { connection } = this.state;
    connection.emit("unsubscribe", channel);
    connection.off('nessage');
  };

  sendMessage = message => {
    const { connection, user } = this.state;
    const { selectedChannel } = this.state;
    connection.emit("send", {
      channel: selectedChannel.id,
      message: message,
      user
    });
  };

  setUser = user => {
    this.setState({ user });
  };

  render() {
    const { user, channels, selectedChannel, messages } = this.state;
    const { children } = this.props;
    return (
      <MessagesContext.Provider
        value={{
          messages,
          user,
          channels,
          selectedChannel,
          sendMessage: this.sendMessage,
          selectChannel: this.selectChannel,
          setUser: this.setUser
        }}
      >
        {children}
      </MessagesContext.Provider>
    );
  }
}

export default MessagesProvider;
