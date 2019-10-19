import React from "react";
import Contact from "./components/Contact";
import styles from "./Contacts.module.css";
import { withMessages } from "@components/MessagesProvider";
class Contacts extends React.Component {
  render() {
    const { channels } = this.props;
    console.log(this.props)
    return (
      <div className={styles.contactsContainer}>
        {channels.map((channel, key) => (
          <Contact key={key} {...channel} />
        ))}
      </div>
    );
  }
}

export default withMessages(Contacts);
