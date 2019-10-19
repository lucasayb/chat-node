import React from "react";
import styles from "./MessageInput.module.css";
import { withMessages } from "@components/MessagesProvider";
class MessageInput extends React.Component {
  state = {
    message: ""
  };

  sendMessage = e => {
    e.preventDefault();
    const { message } = this.state;
    const { sendMessage } = this.props;
    sendMessage(message);
    this.setState({ message: "" });
  };

  render() {
    const { message } = this.state;
    return (
      <div className={styles.sendMessageContainer}>
        <form onSubmit={this.sendMessage}>
          <input
            placeholder="Digite uma mensagem"
            id="send-message-text"
            className={styles.sendMessageText}
            value={message}
            onChange={e => this.setState({ message: e.target.value })}
            autoComplete="off"
            type="text"
          />
          <button
            id="send-button"
            className={[styles.btn, styles.btnSuccess].join(" ")}
          >
            <span>&raquo;</span>
          </button>
        </form>
      </div>
    );
  }
}

export default withMessages(MessageInput);
