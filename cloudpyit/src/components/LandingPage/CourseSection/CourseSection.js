import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseSection.module.scss';

class CourseSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses() {
    fetch("/courses")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        this.setState({ courses: data.courses });
      })
      .catch(err => console.error("Error fetching courses: " + err.message));
  }

  render() {
    return (
      <section className={styles.CourseSection}>
        <div className={styles.CourseSectionContainer}>
          <div className={styles.CourseListContainer}>
            {this.state.courses.map((course, index) => (
              <Link to={`/${course.toLowerCase()}`} className={styles.Course} key={index}>{course}</Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

CourseSection.propTypes = {};

CourseSection.defaultProps = {};

export default CourseSection;
