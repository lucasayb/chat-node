import React from "react";
import Modal from "@components/Modal";
import styles from "./UserSignIn.module.css";
import { withMessages } from "@components/MessagesProvider";
class UserSignIn extends React.Component {
  state = {
    name: "",
    email: ""
  };

  setUser = () => {
    const { name, email } = this.state;
    const { setUser } = this.props;
    setUser({ name, email });
  };

  render() {
    const { name, email } = this.state;
    const { user } = this.props;
    if (user) {
      return (
        <React.Fragment></React.Fragment>
      )
    }
    return (
      <Modal>
        <div className={styles.userSignIn}>
          <div className={styles.field}>
            <input
              placeholder="Digite seu nome"
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
              value={name}
            />
          </div>
          <div className={styles.field}>
            <input
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className={styles.actions}>
            <button
              onClick={this.setUser}
              className={[styles.btn, styles.btnPrimary].join(" ")}
            >
              Acessar chat
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withMessages(UserSignIn);
