import React from 'react';
import { Navigate } from 'react-router-dom';
import styles from './AuthLogin.module.scss';

class AuthLogin extends React.Component {
  constructor(props) {
    super(props);
    this.login_form = {
      username: '',
      password: ''
    };
    this.state = {
      next: null
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
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    }).then(resp => {
      console.log("The response from the endpoint", resp);
      this.setState({ next: resp.to });
    }).catch(error => {
      console.error("ERROR in fetching" + error.message);
      alert("Invalid credentials!");  // Show an alert to the user for invalid credentials.
    });
  }

  render() {
    if (this.state.next) {
      console.log(this.state.next);
      return (
        <Navigate to={this.state.next} />
      )
    }
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
