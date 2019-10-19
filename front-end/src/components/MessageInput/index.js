import React from "react";
import styles from "./MessageInput.module.css";
import { withMessages } from "@components/MessagesProvider";
class MessageInput extends React.Component {
  state = {
    message: ""
  };

  sendMessage = () => {
    const { message } = this.state;
    const { sendMessage } = this.props;
    sendMessage(message);
  };

  render() {
    const { message } = this.state;
    return (
      <div className={styles.sendMessageContainer}>
        <input
          placeholder="Digite uma mensagem"
          id="send-message-text"
          className={styles.sendMessageText}
          value={message}
          onChange={e => this.setState({ message: e.target.value })}
          type="text"
        />
        <button
          id="send-button"
          onClick={this.sendMessage}
          className={[styles.btn, styles.btnSuccess].join(" ")}
        >
          <span>&raquo;</span>
        </button>
      </div>
    );
  }
}

export default withMessages(MessageInput);
