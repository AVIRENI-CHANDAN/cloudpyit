import React from 'react';
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
          <button className={styles.GetStartedBtn}>Get Started</button>
        </div>
      </section>
    );
  }
}

WelcomeSection.propTypes = {};

WelcomeSection.defaultProps = {};

export default WelcomeSection;
