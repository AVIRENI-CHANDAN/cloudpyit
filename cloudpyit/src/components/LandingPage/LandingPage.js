import React from 'react';
import CounterSection from './CounterSection/CounterSection';
import CourseSection from './CourseSection/CourseSection';
import IntroSection from './IntroSection/IntroSection';
import styles from './LandingPage.module.scss';
import WelcomeSection from './WelcomeSection/WelcomeSection';

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage}>
        <WelcomeSection />
        <IntroSection />
        <CounterSection />
        <CourseSection />
      </div>
    );
  }
}

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
