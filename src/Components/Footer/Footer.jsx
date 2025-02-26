import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p style={{ lineHeight: "1.6", color: "#444444", marginBottom: "1rem" }}>
            We offer a curated selection of premium bags designed for style and functionality, crafted with sustainable materials and ethical practices.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/orders">Track Order</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/shipping">Shipping Information</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>support@bagstore.com</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Fashion Street, New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter (optional) */}
      {/* <div className="newsletter-container">
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div> */}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Bag Store. All Rights Reserved. Designed with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;