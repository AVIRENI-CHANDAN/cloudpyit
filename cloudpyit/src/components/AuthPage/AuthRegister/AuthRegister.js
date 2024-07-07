import React from 'react';
import { Navigate } from 'react-router-dom';
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
    this.state = {
      next: null
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
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    }).then(resp => {
      console.log("The response from the endpoint", resp);
      this.setState({ next: resp.to });
    }).catch(error => {
      console.error("ERROR in fetching" + error.message);
      alert("Registration failed! Please check your details.");  // Show an alert to the user for invalid credentials.
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
