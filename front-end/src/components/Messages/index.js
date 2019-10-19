import React from "react";
import styles from "./styles.css";
class Messages extends React.Component {
  render() {
    return (
      <div className={styles.messagesContainer}>
        <div className={styles.message}>
          <div className={styles.messageAuthor}>Lucas</div>
          <div className={styles.messageText}>Olá mundo!</div>
        </div>
      </div>
    );
  }
}

export default Messages;
