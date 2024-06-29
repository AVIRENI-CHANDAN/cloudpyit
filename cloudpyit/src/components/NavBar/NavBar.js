import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './NavBar.module.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    // Bind the method to the component instance
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    return (
      <header className={styles.NavBar}>
        <div className={styles.AppLogo}>
          <img src={logo} alt='LogoErr' />
        </div>
        <div className={styles.NavLinkContainer}>
          <div className={!this.state.showMenu ? styles.NavLinks : styles.MenuNavLinks}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink}>home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink}>about</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink}>courses</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink}>projects</NavLink>
            <NavLink to="/vacancies" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink}>vacancies</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink}>contact</NavLink>
          </div>
          <button className={styles.GetStartedBtn}>Get Started</button>
          <div className={styles.MenuIcon} onClick={this.toggleMenu}>
            {this.state.showMenu ? String.fromCharCode(10005) : String.fromCharCode(9776)}
          </div>
        </div>
      </header>
    );
  }
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
