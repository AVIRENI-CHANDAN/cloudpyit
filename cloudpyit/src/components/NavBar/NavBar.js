import React from 'react';
import { NavLink } from 'react-router-dom';
import close_logo from '../../images/close.png';
import logo from '../../images/logo.png';
import menu_logo from '../../images/more_128p.png';
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

  handleNavLinkClick() {
    this.setState({ showMenu: false });
  }

  render() {
    return (
      <header className={styles.NavBar}>
        <div className={styles.AppLogo}>
          <img src={logo} alt='LogoErr' />
        </div>
        <div className={styles.NavLinkContainer}>
          <div className={!this.state.showMenu ? styles.NavLinks : styles.MenuNavLinks}>
            <div className={styles.MenuCloseBtn} onClick={this.toggleMenu}>
              <img src={close_logo} alt='Close' />
            </div>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink} onClick={this.handleNavLinkClick}>home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink} onClick={this.handleNavLinkClick}>about</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink} onClick={this.handleNavLinkClick}>courses</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink} onClick={this.handleNavLinkClick}>projects</NavLink>
            <NavLink to="/vacancies" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink} onClick={this.handleNavLinkClick}>vacancies</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.GreenNavLink : styles.NavLink} onClick={this.handleNavLinkClick}>contact</NavLink>
          </div>
          <button className={styles.GetStartedBtn}>Get Started</button>
          {(!this.state.showMenu) ? (
            <div className={styles.MenuIcon} onClick={this.toggleMenu}>
              <img src={menu_logo} alt="Menu" />
            </div>
          ) : ''}
        </div>
      </header>
    );
  }
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
