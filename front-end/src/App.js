import React from "react";
import Header from './components/Header';
import Contacts from './components/Contacts';
import Messages from './components/Messages';
import MessageInput from './components/MessageInput';
import styles from "./App.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Contacts />
      <div className={styles.chatContainer}>
        <Messages />
        <MessageInput />
      </div>
    </React.Fragment>
  );
}

export default App;
