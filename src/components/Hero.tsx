import "@styles/hero.scss";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Product Engineer</h1>
        <p className="subtitle">Building Scalable Solutions Across the Stack</p>
        <p className="description">
          Experienced product engineer with almost 4 years of expertise in developing robust,
          scalable applications across various teams and technologies.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="cta-button">Get In Touch</a>
          <a href="/resume.pdf" className="cta-button cta-button-secondary" download>
            <span className="download-icon">↓</span>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
