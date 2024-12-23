import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleComplaintClick = () => {
    navigate('/complaint'); 
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, concerns, or feedback, please feel free to reach out to us.
        Our team is here to assist you and ensure your experience is smooth and hassle-free.
      </p>
      <p>
        Email: mytalorzone@gmail.com <br />
        Phone: +91 8305304591
      </p>
      <button className="complaint-btn" onClick={handleComplaintClick}>
        Give Complaint
      </button>
    </div>
  );
};

export default ContactUs;
