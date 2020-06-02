
import React from 'react';
import './Contact.css';
import '../Common/SocialMedia';
import SocialMedia from '../Common/SocialMedia';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="entire-pg">
            <div id="contact-box">
                <div id="contact-text-box">
                    <div className="text-header">
                        Contact
                    </div> 
                </div>
                <div className="row">
                  <div className="col-sm-7" id="connect">
                      <div id="contact-description">Connect with me</div>
                      <div id="contact-text">If you have any questions, want to connect, or have a project in mind, please contact me via the form below or email. Feel free to check out my social media as well!</div>
                  </div>
                  <div className="col-sm-5" id="email-box">
                      <div id="email-col">
                        <div id="email-header">Email</div>
                        <a href="mailto:bitleighvuu@gmail.com" onClick="window.location=another.html" id="email">bitleighvuu@gmail.com</a>
                      </div>
                      <SocialMedia />
                  </div>
                </div>
                <form 
                    className="needs-validation" 
                    onSubmit={this.submitForm}
                    action="https://formspree.io/mwkrvawk"
                    method="POST"
                    id="contact-form"
                    >
                    <div className="form-group text-left">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="George P. Burdell" required/>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" placeholder="georgepburdell@gatech.edu" required/>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message" rows="5" placeholder="Connect with me!" required></textarea>
                    </div>
                    {status === "SUCCESS" ? <p id="confirmation-success">Thanks for your submission! I'll be in contact shortly! </p> : <button className="btn btn-secondary submitButton">Submit</button>}
                    {status === "ERROR" && <p id="confirmation-error">Ooops! There was an error! Please try again!</p>}
                </form>
              </div>
          </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
