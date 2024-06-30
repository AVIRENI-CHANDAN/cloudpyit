import React from 'react';
import styles from './VacancyPage.module.scss';

class VacancyPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "Vacancies";
    this.page_description = "";
    this.state = {
      vacancies: {}
    };
  }

  componentDidMount() {
    fetch('/vacancy')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        this.setState({ vacancies: data.vacancies });
      })
      .catch(error => console.error("ERROR in fetching" + error.message));
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
          <div className={styles.VacancyWrapper}>
            <div className={styles.List}>
              {Object.entries(this.state.vacancies).map(([key, vacancy]) => (
                <div className={styles.Item} key={key}>
                  <div className={styles.Box}>
                    <div className={styles.TitleWrapper}>
                      <div className={styles.Title}>
                        {vacancy.title}
                      </div>
                    </div>
                  </div>
                  <div className={styles.Box}>
                    <div className={styles.CompanyDetailsWrapper}>
                      <div className={styles.CompanyWrapper}>
                        <div className={styles.Name}>
                          {vacancy.company}
                        </div>
                      </div>
                      <div className={styles.LocationWrapper}>
                        <div className={styles.Location}>
                          {vacancy.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.Box}>
                    <div className={styles.DescriptionWrapper}>
                      <div className={styles.Description}>
                        {vacancy.description}
                      </div>
                    </div>
                  </div>
                  <div className={styles.Box}>
                    <div className={styles.RequirementsWrapper}>
                      <div className={styles.RequirementList}>
                        {vacancy.requirements.map((requirement, index) => (
                          <div className={styles.ListItem} key={index}>
                            {requirement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VacancyPage.propTypes = {};

VacancyPage.defaultProps = {};

export default VacancyPage;
