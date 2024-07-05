import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import AuthPage from '../AuthPage/AuthPage';
import ContactPage from '../ContactPage/ContactPage';
import CoursesPage from '../CoursesPage/CoursesPage';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import NotFound from '../NotFound/NotFound';
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
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<NotFound />} />
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
