import React from 'react';
import styles from './IntroSection.module.scss';
import about_png from '../../../images/about.jpg';

class IntroSection extends React.Component {
  render() {
    return (
      <section className={styles.IntroSection} style={{ backgroundImage: `url(${about_png})` }}>
        <div className={styles.LightOverlay}></div>
        <div className={styles.SectionWrapper}>
          <div className={styles.IntroContentWrapper}>
            <div className={styles.Header}>
              Software Training and Project support
            </div>
            <div className={styles.WelcomeMessage}>
              Welcome to Cloudpy IT Solutions, your trusted partner in comprehensive software training and project support. With a commitment to excellence and a passion for technology, we empower businesses and individuals to achieve their goals through cutting-edge training programs and robust project support services.
            </div>
            <ul className={styles.KeyPoints}>
              <li className={styles.KeyPoint}>Our training programs cover a wide range of software technologies and tools, ensuring that participants gain a deep understanding of both fundamental and advanced concepts.</li>
              <li className={styles.KeyPoint}>From initial planning to final deployment, we provide comprehensive support throughout the project lifecycle, ensuring successful and timely completion.</li>
              <li className={styles.KeyPoint}>Our team of experts offers guidance on best practices, troubleshooting, and optimizing software solutions to meet specific project requirements.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

IntroSection.propTypes = {};

IntroSection.defaultProps = {};

export default IntroSection;
