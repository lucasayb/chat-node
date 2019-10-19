import React from "react";
import styles from './Header.module.css';
class Header extends React.Component {
  render() {
    return (
      <div className={styles.chatHeader}>
        <div className={styles.chatProfile}>
          <div className={styles.chatProfilePhoto}>
            <img src="/images/codeby.jpg" />
          </div>
        </div>
        <div className={styles.chatHeaderContactProfile}>
          <div className={styles.chatHeaderContactPhoto}>
            <img src="/images/codeby.jpg" />
          </div>
          <div className={styles.chatHeaderContactDetails}>
            <div className={styles.chatHeaderContactName}>Codeby</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
