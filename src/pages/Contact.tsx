import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="page-section contact-section">
      <div className="container">
        <h1>Contact</h1>
        <p>Feel free to reach out for opportunities, collaborations, or just to say hello!</p>
        <div className="contact-card">
          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:yosefmelaku9876@gmail.com">yosefmelaku9876@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone</strong>
            <a href="tel:+251955765726">+251 955 765 726</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn</strong>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;