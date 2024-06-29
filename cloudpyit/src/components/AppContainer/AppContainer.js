import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import CoursesPage from '../CoursesPage/CoursesPage';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import VacancyPage from '../VacancyPage/VacancyPage';
import styles from './AppContainer.module.scss';

class AppContainer extends React.Component {
  render() {
    return (
      <div className={styles.AppContainer}>
        <div className={styles.Page}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/vacancies" element={<VacancyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

AppContainer.propTypes = {};

AppContainer.defaultProps = {};

export default AppContainer;
