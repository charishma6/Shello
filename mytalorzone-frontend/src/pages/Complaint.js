import React, { useState } from 'react';
import axios from 'axios';
import './Complaint.css';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    userType: 'User', 
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/complaints', formData);
      setStatus('Complaint submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
        userType: 'User',
      });
    } catch (error) {
      console.error('Error submitting complaint:', error);
      setStatus('Error submitting the complaint. Please try again.');
    }
  };

  return (
    <div className="complaint-form-container">
      <h2>Submit a Complaint</h2>
      {status && <p className="status-message">{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
