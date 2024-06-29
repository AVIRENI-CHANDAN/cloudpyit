import React from 'react';
import styles from './CounterSection.module.scss';

class CounterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student_count: 0,
      course_count: 0,
      event_count: 0,
      trainer_count: 0
    };
    this.studentCountComponentRef = React.createRef();
    this.courseCountComponentRef = React.createRef();
    this.eventCountComponentRef = React.createRef();
    this.trainerCountComponentRef = React.createRef();
  }

  componentDidMount() {
    this.observerStudentCount = this.createIntersectionObserver('students/count', this.studentCountComponentRef, this.studentCountAnimation);
    this.observerCourseCount = this.createIntersectionObserver('courses/count', this.courseCountComponentRef, this.courseCountAnimation);
    this.observerEventCount = this.createIntersectionObserver('events/count', this.eventCountComponentRef, this.eventCountAnimation);
    this.observerTrainerCount = this.createIntersectionObserver('trainers/count', this.trainerCountComponentRef, this.trainerCountAnimation);
  }

  createIntersectionObserver(endpoint, ref, animationCallback) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetch(`/${endpoint}`)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Network response was not ok');
            })
            .then(data => {
              animationCallback.call(this, data.count);
            })
            .catch(error => console.log("ERROR in fetching" + error.message));
        }
      }, {
      threshold: 0.1
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return observer;
  }

  startCountAnimation(target, stateKey, intervalKey) {
    clearInterval(this[intervalKey]);
    let currentCount = this.state[stateKey];
    const increment = target / 100;

    this[intervalKey] = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        clearInterval(this[intervalKey]);
        this.setState({ [stateKey]: target });
      } else {
        this.setState({ [stateKey]: Math.floor(currentCount) });
      }
    }, 10);
  }

  studentCountAnimation(val) {
    this.startCountAnimation(val, 'student_count', 'studentCountInterval');
  }

  courseCountAnimation(val) {
    this.startCountAnimation(val, 'course_count', 'courseCountInterval');
  }

  eventCountAnimation(val) {
    this.startCountAnimation(val, 'event_count', 'eventCountInterval');
  }

  trainerCountAnimation(val) {
    this.startCountAnimation(val, 'trainer_count', 'trainerCountInterval');
  }

  componentWillUnmount() {
    this.cleanupObserver(this.observerStudentCount, this.studentCountComponentRef);
    this.cleanupObserver(this.observerCourseCount, this.courseCountComponentRef);
    this.cleanupObserver(this.observerEventCount, this.eventCountComponentRef);
    this.cleanupObserver(this.observerTrainerCount, this.trainerCountComponentRef);
    clearInterval(this.studentCountInterval);
    clearInterval(this.courseCountInterval);
    clearInterval(this.eventCountInterval);
    clearInterval(this.trainerCountInterval);
  }

  cleanupObserver(observer, ref) {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
    observer.disconnect();
  }

  render() {
    return (
      <section className={styles.CounterSection}>
        <div className={styles.CounterSectionContainer}>
          <div className={styles.CountContainer}>
            <div className={styles.Count} ref={this.studentCountComponentRef}>
              {this.state.student_count}
            </div>
            <div className={styles.CounterCategory}>Students</div>
          </div>
          <div className={styles.CountContainer}>
            <div className={styles.Count} ref={this.courseCountComponentRef}>
              {this.state.course_count}
            </div>
            <div className={styles.CounterCategory}>Courses</div>
          </div>
          <div className={styles.CountContainer}>
            <div className={styles.Count} ref={this.eventCountComponentRef}>
              {this.state.event_count}
            </div>
            <div className={styles.CounterCategory}>Events</div>
          </div>
          <div className={styles.CountContainer}>
            <div className={styles.Count} ref={this.trainerCountComponentRef}>
              {this.state.trainer_count}
            </div>
            <div className={styles.CounterCategory}>Trainers</div>
          </div>
        </div>
      </section>
    );
  }
}

CounterSection.propTypes = {};

CounterSection.defaultProps = {};

export default CounterSection;
