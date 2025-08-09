import React, { useState } from 'react';
import './ContactForm.css';
import Particles from 'react-tsparticles'; // ✅ Particle Background

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ MongoDB server POST remains unchanged
    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    setResponseMsg(result.message);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-wrapper">
      {/* ✅ Particle Background */}
      <Particles
        options={{
          background: { color: { value: "#000000" } },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            links: { enable: true, color: "#ffffff" }
          }
        }}
      />

      <div className="form-container glass-effect">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          {/* Floating Labels */}
          <div className="input-group">
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" value={form.message} onChange={handleChange} required />
            <label>Your Message</label>
          </div>

          <button type="submit">Send</button>
        </form>

        {/* ✅ Animated Response */}
        {responseMsg && <p className="response show">{responseMsg}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
