import React from "react";
import styles from "./Contacts.module.css";
class Contacts extends React.Component {
  render() {
    return (
      <div className={styles.contactsContainer}>
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
      </div>
    );
  }
}

export default Contacts;
