import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './Footer.module.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleContactFormChange = this.handleContactFormChange.bind(this);
    this.subscriptionSubmit = this.subscriptionSubmit.bind(this);
  }

  subscriptionSubmit(event) {
    event.preventDefault();
    fetch("/subscription", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "email": this.state.email })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        console.log("The data", data);
        this.setState({ email: "" });
      })
      .catch(error => console.error("ERROR in fetching" + error.message));
  }

  handleContactFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <footer className={styles.Footer}>
        <div className={styles.FooterBox}>
          <div className={styles.ContainerBox}>
            <div className={styles.Container}>
              <div className={styles.AddressBox}>
                <div className={styles.ContainerHeader}>
                  <img src={logo} alt="Cloudpy IT Logo" />
                </div>
                <div className={styles.Address}>
                  <div className={styles.AddressLine1}>Ayyappa Society,Near YSR Statue,Madhapur</div>
                  <div className={styles.AddressLine2}>Hyderabad 500060</div>
                </div>
                <div className={styles.Contact}>
                  <div className={styles.Phone}>
                    <div className={styles.Header}>Phone</div>
                    <div className={styles.Number}>+91 8142633344</div>
                  </div>
                  <div className={styles.Email}>
                    <div className={styles.Header}>Email</div>
                    <div className={styles.EmailId}>hr@cloudpyit.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Container}>
              <div className={styles.LinksBox}>
                <div className={styles.LinksContainer}>
                  <div className={styles.ContainerHeader}>Useful Links</div>
                  <div className={styles.LinksList}>
                    <Link to="/" className={styles.Link}>Home</Link>
                    <Link to="/about" className={styles.Link}>About Us</Link>
                    <Link to="/services" className={styles.Link}>Services</Link>
                    <Link to="/terms-of-service" className={styles.Link}>Terms of Service</Link>
                    <Link to="/privacy-policy" className={styles.Link}>Privacy Policy</Link>
                  </div>
                </div>
                <div className={styles.LinksContainer}>
                  <div className={styles.ContainerHeader}>Our Services</div>
                  <div className={styles.LinksList}>
                    <Link to="/web-design" className={styles.Link}>Web Design</Link>
                    <Link to="/web-development" className={styles.Link}>Web Development</Link>
                    <Link to="/product-development" className={styles.Link}>Product Development</Link>
                    <Link to="/marketing" className={styles.Link}>Marketing</Link>
                    <Link to="/graphic-design" className={styles.Link}>Graphic Design</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Container}>
              <div className={styles.SubscriptionBox}>
                <div className={styles.ContainerHeader}>Our Newsletter</div>
                <div className={styles.SubscriptionCaption}>Subscribe to our newsletter and receive the latest news about our products and services!</div>
                <div className={styles.SubscriptionFormWrapper}>
                  <form className={styles.NewletterSubscriptionForm} onSubmit={this.subscriptionSubmit}>
                    <input type="email" name="email" value={this.state.email} className={styles.NewletterSubscriptionInput} onChange={this.handleContactFormChange} placeholder="Enter your email address" />
                    <button className={styles.NewletterSubscriptionBtn}>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.CopyrightBox}>
            <div className={styles.StatementBox}>
              © Copyright <div className={styles.CompanyNameBox}>Cloudpy IT</div> All Rights Reserved
            </div>
            <div className={styles.StatementBox}>
              Designed by <Link to="/" className={styles.DeveloperBox}>Cloudpy IT</Link>
            </div>
          </div>
        </div>
      </footer >
    );
  }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
