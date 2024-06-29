import React from 'react';
import styles from './VacancyPage.module.scss';

class VacancyPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "Vacancies";
    this.page_description = "";
  }
  render() {
    return (
      <div className={styles.VacancyPage}>
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

VacancyPage.propTypes = {};

VacancyPage.defaultProps = {};

export default VacancyPage;
