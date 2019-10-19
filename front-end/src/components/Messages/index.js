import React from "react";
import Message from "./components/Message";
import styles from "./Messages.module.css";
import { withMessages } from "@components/MessagesProvider";
class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className={styles.messagesContainer}>
        {messages.map(message => (
          <Message message={message} />
        ))}
      </div>
    );
  }
}

export default withMessages(Messages);
