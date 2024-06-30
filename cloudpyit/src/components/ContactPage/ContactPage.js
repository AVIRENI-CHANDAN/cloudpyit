import React from 'react';
import email_icon from '../../images/email_128p.png';
import gps_icon from '../../images/gps_128p.png';
import phone_icon from '../../images/phone-call_128p.png';
import styles from './ContactPage.module.scss';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.page_title = "Contact";
    this.page_description = "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
    this.address = "Ayyappa Society, Near YSR Statue, Madhapur, Hyderabad 500060";
    this.phone = "+91 8142633344";
    this.email = "hr@cloudpyit.com";
    this.state = {
      courses: [],
      contact_form: {
        full_name: "",
        email: "",
        course: "",
        message: ""
      }
    };
    this.handleContactFormChange = this.handleContactFormChange.bind(this);
    this.contactFormSubmit = this.contactFormSubmit.bind(this);
  }

  componentDidMount() {
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
      .catch(error => console.error("ERROR in fetching" + error.message));
  }

  handleContactFormChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      contact_form: {
        ...prevState.contact_form,
        [name]: value
      }
    }));
  }

  contactFormSubmit(event) {
    event.preventDefault();
    console.log("The contact form submission", this.state.contact_form);
    fetch("/contact-form", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.contact_form)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        console.log("The data", data);
      })
      .catch(error => console.error("ERROR in fetching" + error.message));
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
          <div className={styles.PageBox}>
            <div className={styles.MapLocationBox}>MapLocationBox</div>
            <div className={styles.ContactFormBox}>
              <div className={styles.ContactDetails}>
                <div className={styles.DetailBox}>
                  <div className={styles.DetailIcon}>
                    <img className={styles.GPSIcon} src={gps_icon} alt="GPS" />
                  </div>
                  <div className={styles.AddressBox}>{this.address}</div>
                </div>
                <div className={styles.DetailBox}>
                  <div className={styles.DetailIcon}>
                    <img className={styles.MobileIcon} src={phone_icon} alt="Phone" />
                  </div>
                  <div className={styles.MobileBox}>{this.phone}</div>
                </div>
                <div className={styles.DetailBox}>
                  <div className={styles.DetailIcon}>
                    <img className={styles.EmailIcon} src={email_icon} alt="Email" />
                  </div>
                  <div className={styles.EmailBox}>{this.email}</div>
                </div>
              </div>
              <div className={styles.FormBox}>
                <form className={styles.ContactForm} onSubmit={this.contactFormSubmit}>
                  <div className={styles.FormGroup}>
                    <div className={styles.FormField}>
                      <input type="text" name="full_name" value={this.state.contact_form.full_name} onChange={this.handleContactFormChange} placeholder="Full name" className={styles.FullNameField} />
                    </div>
                    <div className={styles.FormField}>
                      <input type="email" name="email" value={this.state.contact_form.email} onChange={this.handleContactFormChange} placeholder="Email" className={styles.EmailField} />
                    </div>
                  </div>
                  <div className={styles.FormGroup}>
                    <div className={styles.FormField}>
                      <select id="course" name="course" value={this.state.contact_form.course} onChange={this.handleContactFormChange} className={styles.CourseField}>
                        <option value="" disabled>Select an option</option>
                        {this.state.courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={styles.FormGroup}>
                    <div className={styles.FormField}>
                      <textarea name="message" placeholder="Message" value={this.state.contact_form.message} onChange={this.handleContactFormChange} rows={4} className={styles.MessageField} />
                    </div>
                  </div>
                  <div className={styles.FormGroup}>
                    <button type="submit" className={styles.FormSubmit}>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContactPage.propTypes = {};

ContactPage.defaultProps = {};

export default ContactPage;
