import React from "react";
import Message from "./components/Message";
import styles from "./Messages.module.css";
import { withMessages } from "@components/MessagesProvider";
class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className={styles.messagesContainer}>
        {messages.length ? (messages.map(message => (
          <Message message={message} />
        ))) : (
          <div className={styles.noMessagesContainer}>
            Nenhuma mensagem para este canal
          </div>
        )}
      </div>
    );
  }
}

export default withMessages(Messages);
