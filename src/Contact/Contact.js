
import React from 'react';
import './Contact.css';

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
            <div id="about-box">
                <div className="header-wrapper">
                    <img
                        src={process.env.PUBLIC_URL + "/images/contactHeader1.jpg"}
                        alt="Contact Header"
                        id="resume-image"
                    ></img>
                </div>
                <div id="resume-top-bar">
                    <div id="header-text-box">
                        <div className="text-header">
                            Contact
                        </div>
                    </div>
                </div>
                <form 
                    className="needs-validation" 
                    onSubmit={this.submitForm}
                    action="https://formspree.io/mwkrvawk"
                    method="POST"
                    id="contact-form"
                    >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="George P. Burdell" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" placeholder="georgepburdell@example.com" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message" rows="5" required></textarea>
                    </div>
                    {status === "SUCCESS" ? <p id="confirmation-success">Thanks for your submission! I'll be in contact shortly! </p> : <button className="btn btn-secondary">Submit</button>}
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
