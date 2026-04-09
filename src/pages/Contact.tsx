import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '600px',
      margin: '0 auto',
      background: '#fff',
      minHeight: '80vh',
      borderRadius: '8px',
      color: '#333'
    }}>
      <h1>Contact</h1>
      <p>Feel free to reach out to me for opportunities, collaborations, or just to say hello!</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div>
          <strong>Email:</strong> your.email@example.com
        </div>
        <div>
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" style={{ color: '#0077b5' }}>linkedin.com/in/yourprofile</a>
        </div>
        <div>
          <strong>Phone:</strong> (123) 456-7890
        </div>
      </div>
    </div>
  );
};

export default Contact;