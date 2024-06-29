import React from 'react';
import styles from './ContactPage.module.scss';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "Contact";
    this.page_description = "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  }
  render() {
    return (
      <div className={styles.ContactPage}>
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

ContactPage.propTypes = {};

ContactPage.defaultProps = {};

export default ContactPage;
