import React from "react";
import styles from "./Contact.module.css";
class Contact extends React.Component {
  render() {
    const { image, createdAt, name } = this.props;
    return (
      <div className={styles.contact}>
        <div className={styles.contactPhoto}>
          <img src={image} />
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.contactName}>{name}</div>
          <div className={styles.contactLastMessageDate}>{createdAt}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
