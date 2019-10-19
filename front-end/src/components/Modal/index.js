import React from "react";
import styles from "./Modal.module.css";

class Modal extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
