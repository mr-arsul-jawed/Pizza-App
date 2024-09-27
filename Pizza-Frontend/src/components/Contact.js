import React, { useState } from "react";
import '../CSS/Contact.css'; 

const Contact = () => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [buttonText, setButtonText] = useState('Send');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});

  const handleFormUpdate = (category, value) => {
    setFormFields({
      ...formFields,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");

    // Basic validation
    if (!formFields.firstName || !formFields.lastName || !formFields.email || !formFields.phone || !formFields.message) {
      setLoading(false);
      setButtonText("Send");
      setStatus({ success: false, message: 'Please fill all fields' });
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formFields),
      });

      setLoading(false);
      setButtonText("Send");

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setFormFields({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setLoading(false);
      console.error('There was a problem with the fetch operation:', error);
      setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <div className="contact-container">
        {/* <div className="contact-image">
          <img src={contact} alt="Contact Us" />
        </div> */}
        <div className="contact-form">
          <h2>Get In Touch for any query</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  value={formFields.firstName} 
                  placeholder="First Name" 
                  onChange={(e) => handleFormUpdate('firstName', e.target.value)} 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  value={formFields.lastName}
                  placeholder="Last Name" 
                  onChange={(e) => handleFormUpdate('lastName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  value={formFields.email} 
                  placeholder="Email Address" 
                  onChange={(e) => handleFormUpdate('email', e.target.value)} 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  value={formFields.phone} 
                  placeholder="Phone No." 
                  onChange={(e) => handleFormUpdate('phone', e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea 
                  rows="6" 
                  value={formFields.message} 
                  placeholder="Message" 
                  onChange={(e) => handleFormUpdate('message', e.target.value)}
                ></textarea>
                <button type="submit" disabled={loading}>
                  <span>{buttonText}</span>
                </button>
              </div>
              {
                status.message &&
                <div className="form-status">
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                </div>
              }
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;