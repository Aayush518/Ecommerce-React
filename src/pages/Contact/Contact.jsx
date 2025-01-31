import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Our team is always here to help.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <h3>Email Us</h3>
            <p>support@bagstore.com</p>
            <p>sales@bagstore.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Phone size={24} />
            </div>
            <h3>Call Us</h3>
            <p>+1 (123) 456-7890</p>
            <p>Mon-Fri, 9am-6pm EST</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <MapPin size={24} />
            </div>
            <h3>Visit Us</h3>
            <p>123 Fashion Street</p>
            <p>New York, NY 10001</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;