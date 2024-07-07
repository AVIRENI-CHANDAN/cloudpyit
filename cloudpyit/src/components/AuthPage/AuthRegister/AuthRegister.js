import React from 'react';
import styles from './AuthRegister.module.scss';

class AuthRegister extends React.Component {
  constructor(props) {
    super(props);
    this.register_form = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.register_form[event.target.name] = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("register_form", this.register_form);
    fetch("/api/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.register_form)
    }).then(response => {
      console.log("The registration auth response", response);
    })
  }

  render() {
    return (
      <div className={styles.AuthRegister}>
        <div className={styles.RegisterWrapper}>
          <form className={styles.Form} onSubmit={this.onSubmit}>
            <div className={styles.FormGroup}>
              <input className={styles.FormInput} type="text" name="username" placeholder="Username" onChange={this.handleChange} autoComplete="username" />
            </div>
            <div className={styles.FormGroup}>
              <input className={styles.FormInput} type="email" name="email" placeholder="Email" onChange={this.handleChange} autoComplete="email" />
            </div>
            <div className={styles.FormGroup}>
              <input className={styles.FormInput} type="password" name="password" placeholder="Password" onChange={this.handleChange} autoComplete="new-password" />
            </div>
            <div className={styles.FormGroup}>
              <input className={styles.FormInput} type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} autoComplete="new-password" />
            </div>
            <button type="submit" className={styles.SubmitBtn}>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

AuthRegister.propTypes = {};

AuthRegister.defaultProps = {};

export default AuthRegister;
