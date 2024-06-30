import React from 'react';
import students_logo from '../../images/user.png';
import likes_logo from '../../images/heart.png';
import styles from './CoursesPage.module.scss';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "Courses";
    this.page_description = "This structured approach to software training and project support, you can ensure that participants gain the necessary skills to develop and manage Applications effectively. This approach also ensures that projects are completed successfully, meeting the client's needs and goals.";
    this.state = {
      courses_data: {}
    };
  }

  componentDidMount() {
    fetch("/courses/popular")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        this.setState({ courses_data: data });
      })
      .catch(error => console.error("ERROR in fetching" + error.message));
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
          <div className={styles.PageBox}>
            <div className={styles.CoursesList}>
              {Object.entries(this.state.courses_data).map(([key, value]) => (
                <div className={styles.CourseListItem} key={key}>
                  <div className={styles.CourseImage}>
                    <img src={`/${value.image}`} alt={value.title} />
                  </div>
                  <div className={styles.AboutCourse}>
                    <div className={styles.CourseTitle}>
                      <div className={styles.TitleWrapper}>
                        {value.title}
                      </div>
                    </div>
                    <div className={styles.CourseDescription}>
                      <div className={styles.DescriptionWrapper}>
                        {value.description}
                      </div>
                    </div>
                  </div>
                  <div className={styles.TrainerBox}>
                    <div className={styles.TrainerImage}>
                      <img src={`${value.trainer.profile_pic}`} alt="trainer" />
                    </div>
                    <div className={styles.TrainerName}>
                      {value.trainer.name}
                    </div>
                    <div className={styles.CourseStats}>
                      <div className={styles.Stats}>
                        <div className={styles.Logo}>
                          <img src={students_logo} alt='Students' />
                        </div>
                        <div className={styles.Count}>
                          {value.students}
                        </div>
                      </div>
                      <div className={styles.Stats}>
                        <div className={styles.Logo}>
                          <img src={likes_logo} alt='Likes' />
                        </div>
                        <div className={styles.Count}>
                          {value.likes}
                        </div>
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

CoursesPage.propTypes = {};

CoursesPage.defaultProps = {};

export default CoursesPage;
