import React from 'react';
import styles from './CoursesPage.module.scss';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "Courses";
    this.page_description = "This structured approach to software training and project support, you can ensure that participants gain the necessary skills to develop and manage Applications effectively. This approach also ensures that projects are completed successfully, meeting the client's needs and goals.";
  }
  render() {
    return (
      <div className={styles.CoursesPage}>
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
          PageBody
        </div>
      </div>
    );
  }
}

CoursesPage.propTypes = {};

CoursesPage.defaultProps = {};

export default CoursesPage;
