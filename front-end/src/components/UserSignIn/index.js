import React from "react";
import Modal from "@components/Modal";
import styles from "./UserSignIn.module.css";
import { withMessages } from "@components/MessagesProvider";
class UserSignIn extends React.Component {
  state = {
    name: "",
    email: ""
  };

  setUser = e => {
    e.preventDefault();
    const { name, email } = this.state;
    const { setUser } = this.props;
    setUser({ name, email });
  };

  render() {
    const { name, email } = this.state;
    const { user } = this.props;
    if (user) {
      return <React.Fragment></React.Fragment>;
    }
    return (
      <Modal>
        <div className={styles.userSignIn}>
          <form onSubmit={this.setUser}>
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
              <button className={[styles.btn, styles.btnPrimary].join(" ")}>
                Acessar chat
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withMessages(UserSignIn);
