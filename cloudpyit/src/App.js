import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';
import AppContainer from './components/AppContainer/AppContainer';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Router>
          <div className={styles.AppNavBar}>
            <NavBar />
          </div>
          <div className={styles.AppContentBox}>
            <AppContainer />
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};


export default App;
