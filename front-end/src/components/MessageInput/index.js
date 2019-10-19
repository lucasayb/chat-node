import React from "react";
import styles from "./MessageInput.module.css";
class MessageInput extends React.Component {
  render() {
    return (
      <div className={styles.sendMessageContainer}>
        <input
          placeholder="Digite uma mensagem"
          id="send-message-text"
          className={styles.sendMessageText}
          type="text"
        />
        <button
          id="send-button"
          className={[styles.btn, styles.btnSuccess].join(" ")}
        >
          <span>&raquo;</span>
        </button>
      </div>
    );
  }
}

export default MessageInput;
