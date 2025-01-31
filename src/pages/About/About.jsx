const About = () => {
    return (
      <div className="about-container">
        <div className="about-hero">
          <h1>About Bagstore</h1>
          <p>Crafting Premium Bags Since 1970</p>
        </div>
        
        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 1970, Bagstore has been at the forefront of luxury bag craftsmanship for over five decades. 
              What started as a small leather workshop has grown into a global brand synonymous with quality and style.
            </p>
          </section>
  
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe that every bag tells a story. Our mission is to create timeless pieces that combine 
              traditional craftsmanship with modern design, ensuring that each product meets the highest 
              standards of quality and sustainability.
            </p>
          </section>
  
          <section className="about-section values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>Only the finest materials and craftsmanship go into our products</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>Committed to ethical production and environmental responsibility</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly evolving our designs to meet modern needs</p>
            </div>
            <div className="value-card">
              <h3>Service</h3>
              <p>Dedicated to providing exceptional customer experience</p>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default About;