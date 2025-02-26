import React from 'react';
import './About.css';
import { FaLeaf, FaAward, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Bagstore</h1>
          <p className="subtitle">Crafting Premium Bags Since 1970</p>
          <div className="hero-divider"></div>
        </div>
      </div>
      
      <div className="about-container">
        <section className="about-section story-section">
          <div className="section-header">
            <h2>Our Story</h2>
            <div className="section-underline"></div>
          </div>
          <div className="two-column">
            <div className="column">
              <p>
                Founded in 1970, Bagstore has been at the forefront of luxury bag craftsmanship for over five decades. 
                What started as a small leather workshop in Milan has grown into a global brand synonymous with quality and style.
              </p>
              <p>
                Through generations of skilled artisans, we've preserved traditional techniques while embracing innovation. 
                Each Bagstore product represents our commitment to excellence and our passion for creating accessories that stand the test of time.
              </p>
            </div>
            <div className="column image-column">
              <div className="about-image workshop-image"></div>
            </div>
          </div>
        </section>

        <section className="about-section mission-section">
          <div className="section-header">
            <h2>Our Mission & Vision</h2>
            <div className="section-underline"></div>
          </div>
          <div className="two-column reverse">
            <div className="column image-column">
              <div className="about-image mission-image"></div>
            </div>
            <div className="column">
              <h3>Mission</h3>
              <p>
                We believe that every bag tells a story. Our mission is to create timeless pieces that combine 
                traditional craftsmanship with modern design, ensuring that each product meets the highest 
                standards of quality and sustainability.
              </p>
              
              <h3>Vision</h3>
              <p>
                To be recognized globally as the leading innovator in sustainable luxury bags, setting new 
                standards in ethical production while never compromising on quality or design.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section values-section">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="section-underline"></div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FaAward /></div>
              <h3>Quality</h3>
              <p>Only the finest materials and craftsmanship go into our products, ensuring durability and timeless elegance.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaLeaf /></div>
              <h3>Sustainability</h3>
              <p>Committed to ethical production, environmental responsibility, and reducing our carbon footprint.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaLightbulb /></div>
              <h3>Innovation</h3>
              <p>Constantly evolving our designs and processes to meet modern needs while preserving traditional techniques.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaHandshake /></div>
              <h3>Service</h3>
              <p>Dedicated to providing exceptional customer experience at every touchpoint, from browsing to aftercare.</p>
            </div>
          </div>
        </section>

        <section className="about-section timeline-section">
          <div className="section-header">
            <h2>Our Journey</h2>
            <div className="section-underline"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>1970</h3>
                <p>Bagstore founded as a small leather workshop in Milan, Italy.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>1985</h3>
                <p>Expansion to international markets with our first flagship store in Paris.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>1998</h3>
                <p>Introduction of our iconic "Eternal" collection, which remains a bestseller today.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Launched our sustainability initiative, committing to ethical sourcing and production.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023</h3>
                <p>Celebrating over 50 years of craftmanship with our Heritage Collection.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section team-section">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <div className="section-underline"></div>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo member-1"></div>
              <h3>Emma Rodriguez</h3>
              <p className="member-title">Creative Director</p>
            </div>
            <div className="team-member">
              <div className="member-photo member-2"></div>
              <h3>Marco Bianchi</h3>
              <p className="member-title">Head Craftsman</p>
            </div>
            <div className="team-member">
              <div className="member-photo member-3"></div>
              <h3>Sophie Chen</h3>
              <p className="member-title">Sustainability Lead</p>
            </div>
            <div className="team-member">
              <div className="member-photo member-4"></div>
              <h3>David Kim</h3>
              <p className="member-title">Design Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;