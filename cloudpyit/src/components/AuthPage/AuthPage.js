import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AuthLogin from './AuthLogin/AuthLogin';
import styles from './AuthPage.module.scss';
import AuthRegister from './AuthRegister/AuthRegister';

class AuthPage extends React.Component {
  render() {
    return (
      <div className={styles.AuthPage}>
        <div className={styles.AuthWrapper}>
          <div className={styles.AuthNavWrapper}>
            <nav className={styles.AuthNavBar}>
              <NavLink to="/auth/login" className={({ isActive }) => isActive ? styles.ActiveLink : styles.Link}>Login</NavLink>
              <NavLink to="/auth/register" className={({ isActive }) => isActive ? styles.ActiveLink : styles.Link}>Register</NavLink>
            </nav>
          </div>
          <div className={styles.AuthBodyWrapper}>
            <Routes>
              <Route path="/login" element={<AuthLogin />} />
              <Route path="/register" element={<AuthRegister />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

AuthPage.propTypes = {};

AuthPage.defaultProps = {};

export default AuthPage;
