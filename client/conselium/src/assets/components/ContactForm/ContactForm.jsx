import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    industry: 'Accountants and Bookkeepers',
    services: 'Consulting Services',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic
    console.log('Form Submitted', formData);
  };

  return (
    <div className="contact-form-container">
      <section className="contact-form">
        <h2 className="form-heading">How can we help you?</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your work email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+57"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Enter your job title"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="industry">Industry</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option>Accountants and Bookkeepers</option>
              <option>Financial Services</option>
              <option>Healthcare</option>
              <option>Technology</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="services">Services</label>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
            >
              <option>Consulting Services</option>
              <option>Training & Professional Development</option>
            </select>
          </div>
          <div className="form-footer">
            <p>
              By clicking submit below, you consent to allow Consilium Advisory
              to store and process the personal information in line with our 
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Global Privacy Notice
              </a>{' '}
              and{' '}
              <a href="/disclaimer" target="_blank" rel="noopener noreferrer">
                Site Disclaimer Cookie Policy
              </a>
              . We may contact you about our products or services, as well as
              other content that may be of interest to you. You can unsubscribe
              at any time by notifying us.
            </p>
            <button type="submit" className="submit-button">
              Submit Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;