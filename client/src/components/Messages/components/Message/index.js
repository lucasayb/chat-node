import React from "react";
import styles from "./Message.module.css";
import { withMessages } from "@components/MessagesProvider";
class Message extends React.Component {
  state = {
    isCurrentUser: false
  };

  componentDidMount() {
    const { message, user } = this.props;
    this.setState({ isCurrentUser: user.email === message.user.email });
  }

  render() {
    const { isCurrentUser } = this.state;
    const { message } = this.props;
    return (
      <div
        className={
          isCurrentUser
            ? [styles.message, styles.yourMessage].join(" ")
            : styles.message
        }
      >
        <div className={styles.messageAuthor}>
          {isCurrentUser ? "Você" : message.user.name}
        </div>
        <div className={styles.messageText}>{message.message}</div>
      </div>
    );
  }
}

export default withMessages(Message);
