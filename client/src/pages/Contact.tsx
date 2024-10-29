// src/components/Contact.tsx

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.description}>If you have any questions, feel free to reach out to us by filling out the form below.</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            rows={4}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#D3D0CBFF',
    color: '#2E5266FF',
    maxWidth: '600px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center' as 'center',
    color: '#2b74c2',
    marginBottom: '1rem',
  },
  description: {
    textAlign: 'center' as 'center',
    fontSize: '1.1rem',
    color: '#6E8898FF',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    fontSize: '1rem',
    color: '#6E8898FF',
    marginBottom: '0.5rem',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #9FB1BCFF',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
    color: '#2E5266FF',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #9FB1BCFF',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
    color: '#2E5266FF',
    fontSize: '1rem',
    resize: 'vertical' as 'vertical',
  },
  button: {
    backgroundColor: '#d46108',
    color: '#FFFFFF',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    alignSelf: 'center' as 'center',
  },
};

export default Contact;
