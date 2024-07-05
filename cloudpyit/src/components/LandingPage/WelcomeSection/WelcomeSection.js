import React from 'react';
import { Link } from 'react-router-dom';
import hero_bg from '../../../images/hero-bg.jpg';
import styles from './WelcomeSection.module.scss';

class WelcomeSection extends React.Component {
  render() {
    return (
      <section className={styles.WelcomeSection} style={{ backgroundImage: `url(${hero_bg})` }}>
        <div className={styles.DarkOverlay}></div>
        <div className={styles.SectionWrapper}>
          <div className={styles.SectionContentWrapper}>
            <div className={styles.LearningToday}>Learning today</div>
            <div className={styles.LeadingTomorrow}>Leading tomorrow</div>
            <div className={styles.IntroCaption}>We are team of talented designers making websites with Bootstrap</div>
          </div>
          <Link to="/auth" className={styles.GetStartedBtn}>Get Started</Link>
        </div>
      </section>
    );
  }
}

WelcomeSection.propTypes = {};

WelcomeSection.defaultProps = {};

export default WelcomeSection;
