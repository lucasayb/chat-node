import React from "react";
import styles from "./Contact.module.css";
class Contact extends React.Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.contactPhoto}>
          <img src="/images/codeby.jpg" />
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.contactName}>Codeby</div>
          <div className={styles.contactLastMessageDate}>
            13 de fevereiro de 2019
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
