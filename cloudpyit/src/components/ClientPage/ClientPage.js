import React from 'react';
import styles from './ClientPage.module.scss';

class ClientPage extends React.Component {
  render() {
    return (
      <div className={styles.ClientPage}>
        ClientPage Component
      </div>
    );
  }
}

ClientPage.propTypes = {};

ClientPage.defaultProps = {};

export default ClientPage;
