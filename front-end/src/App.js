import React from "react";
import Header from './components/Header';
import Contacts from './components/Contacts';
import Messages from './components/Messages';
import MessageInput from './components/MessageInput';
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Contacts />
      <Messages />
      <MessageInput />
    </React.Fragment>
  );
}

export default App;
