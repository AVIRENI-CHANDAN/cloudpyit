import React from 'react';
import about_png from '../../images/about.jpg';
import accept_png from '../../images/accept.png';
import styles from './AboutPage.module.scss';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "About Us";
  }
  render() {
    return (
      <div className={styles.AboutPage}>
        <div className={styles.PageHeading}>
          <div className={styles.PageTitle}>
            <div className={styles.Title}>{this.page_title}</div>
            <div className={styles.TitleDescription}>{this.page_description}</div>
          </div>
          <div className={styles.PageRoutePath}>
            <div className={styles.PageRoutePathWrapper}>
              <div className={styles.PageRoute}>Home</div>
              <div className={styles.PageRoute}>{this.page_title}</div>
            </div>
          </div>
        </div>
        <div className={styles.PageBody}>
          <div className={styles.PageBodyBox}>
            <div className={styles.AboutContent}>
              <div className={styles.Title}>
                Software Training and Project support
              </div>
              <div className={styles.Description}>
                Welcome to Cloudpy IT Solutions, your trusted partner in comprehensive software training and project support. With a commitment to excellence and a passion for technology, we empower businesses and individuals to achieve their goals through cutting-edge training programs and robust project support services..
              </div>
              <div className={styles.AboutList}>
                <div className={styles.ListItem}>
                  <img src={accept_png} className={styles.AcceptPng} alt='Accept Icon' />
                  Our training programs cover a wide range of software technologies and tools, ensuring that participants gain a deep understanding of both fundamental and advanced concepts.
                </div>
                <div className={styles.ListItem}>
                  <img src={accept_png} className={styles.AcceptPng} alt='Accept Icon' />
                  From initial planning to final deployment, we provide comprehensive support throughout the project lifecycle, ensuring successful and timely completion.
                </div>
                <div className={styles.ListItem}>
                  <img src={accept_png} className={styles.AcceptPng} alt='Accept Icon' />
                  Our team of experts offers guidance on best practices, troubleshooting, and optimizing software solutions to meet specific project requirements.
                </div>
              </div>
            </div>
            <div className={styles.AboutImage}>
              <img src={about_png} alt='About' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
