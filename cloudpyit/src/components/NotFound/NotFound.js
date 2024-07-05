import React from 'react';
import styles from './NotFound.module.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.NotFound}>
        Coming Soon...
      </div>
    );
  }
}

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
