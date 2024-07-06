import React from 'react';
import styles from './AuthLogin.module.scss';

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);
    this.login_form = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.login_form[event.target.name] = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("login_form", this.login_form);
    fetch("/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.login_form)
    }).then(response => {
      console.log("The login auth response", response);
    })
  }

  render() {
    return (
      <div className={styles.AuthLogin}>
        <div className={styles.LoginWrapper}>
          <form className={styles.Form} onSubmit={this.onSubmit}>
            <div className={styles.FormGroup}>
              <input className={styles.FormInput} type="text" name="username" placeholder="Username" onChange={this.handleChange} autoComplete="username" />
            </div>
            <div className={styles.FormGroup}>
              <input className={styles.FormInput} type="password" name="password" placeholder="Password" onChange={this.handleChange} autoComplete="current-password" />
            </div>
            <button type="submit" className={styles.SubmitBtn}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

AuthLogin.propTypes = {};

AuthLogin.defaultProps = {};

export default AuthLogin;
