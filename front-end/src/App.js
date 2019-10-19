import React from "react";
import UserSignIn from "./components/UserSignIn";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Messages from "./components/Messages";
import MessagesProvider, { withMessages } from "./components/MessagesProvider";
import MessageInput from "./components/MessageInput";
import "./App.css";
import io from "socket.io-client";

class App extends React.Component {
  state = {
    connection: undefined
  };

  componentDidMount() {
    this.setState({ connection: io("http://localhost:3433") });
  }

  render() {
    const { user } = this.props;
    return (
      <MessagesProvider>
        <UserSignIn />
        <Header />
        <Contacts />
        <Messages />
        <MessageInput />
      </MessagesProvider>
    );
  }
}

export default withMessages(App);
