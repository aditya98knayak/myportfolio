const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:your.email@example.com">adik.nayak@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>GitHub</strong>
            <a href="https://github.com/aditya98knayak" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn</strong>
            <a href="https://linkedin.com/in/adityaknayak" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
