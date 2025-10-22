import { type Project } from '../types'

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'E-Commerce Platform',
            tech: ['React', 'Node.js', 'MongoDB'],
            description: 'Built a full-stack e-commerce solution serving 10,000+ users with real-time inventory management.',
            highlights: [
                'Implemented secure payment gateway integration',
                'Optimized database queries reducing load time by 60%',
                'Designed RESTful APIs handling 1M+ requests/day'
            ]
        },
        {
            title: 'Analytics Dashboard',
            tech: ['Next.js', 'Python', 'FastAPI'],
            description: 'Developed real-time analytics platform with interactive data visualizations and reporting.',
            highlights: [
                'Created custom data pipelines processing 500GB+ daily',
                'Built responsive dashboards with live data updates',
                'Implemented role-based access control system'
            ]
        },
        {
            title: 'Content Management System',
            tech: ['Django', 'React', 'MySQL'],
            description: 'Architected scalable CMS enabling teams to manage content across multiple platforms efficiently.',
            highlights: [
                'Designed flexible content schema with versioning',
                'Integrated with cloud storage for media assets',
                'Reduced content publishing time by 75%'
            ]
        }
    ]

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <div className="project-tech">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-body">
                                <p>{project.description}</p>
                                <ul>
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
