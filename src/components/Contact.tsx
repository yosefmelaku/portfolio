import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p>Feel free to reach out to me for opportunities, collaborations, or just to say hello!</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div>
            <strong>Email:</strong> your.email@example.com
          </div>
          <div>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" style={{ color: '#646cff' }}>linkedin.com/in/yourprofile</a>
          </div>
          <div>
            <strong>Phone:</strong> (123) 456-7890
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;