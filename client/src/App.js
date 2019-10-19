import React from "react";
import UserSignIn from "./components/UserSignIn";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Messages from "./components/Messages";
import MessagesProvider, { withMessages } from "./components/MessagesProvider";
import MessageInput from "./components/MessageInput";
import "./App.css";

class App extends React.Component {
  state = {
    connection: undefined
  };

  render() {
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
