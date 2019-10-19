import React from "react";
import styles from "./Message.module.css";
class Message extends React.Component {
  render() {
    return (
      <div className={styles.message}>
        <div className={styles.messageAuthor}>Lucas</div>
        <div className={styles.messageText}>Olá mundo!</div>
      </div>
    );
  }
}

export default Message;
