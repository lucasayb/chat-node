import React from "react";
import Contact from "./components/Contact";
import styles from "./Contacts.module.css";
class Contacts extends React.Component {
  render() {
    return (
      <div className={styles.contactsContainer}>
        <Contact />
      </div>
    );
  }
}

export default Contacts;
