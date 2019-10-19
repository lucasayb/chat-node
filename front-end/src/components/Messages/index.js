import React from "react";
import Message from "./components/Message";
import styles from "./Messages.module.css";
class Messages extends React.Component {
  render() {
    return (
      <div className={styles.messagesContainer}>
        <Message />
      </div>
    );
  }
}

export default Messages;
