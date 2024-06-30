import React from 'react';
import styles from './ProjectPage.module.scss';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "Projects";
    this.page_description = "";
  }
  render() {
    return (
      <div className={styles.ProjectPage}>
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
          <h1>Sooner...</h1>
        </div>
      </div>
    );
  }
}

ProjectPage.propTypes = {};

ProjectPage.defaultProps = {};

export default ProjectPage;
