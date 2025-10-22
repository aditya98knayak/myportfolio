const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '1rem' }}>
            I'm a passionate product engineer with nearly 4 years of experience building scalable applications 
            and working collaboratively across diverse teams. My expertise spans both backend and frontend development, 
            with a strong focus on creating efficient, maintainable, and user-centric solutions.
          </p>
          <p>
            I specialize in designing robust architectures that power modern web applications, leveraging cutting-edge 
            technologies to solve complex problems. My approach combines technical excellence with a deep understanding 
            of user needs, ensuring every solution delivers real value.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
