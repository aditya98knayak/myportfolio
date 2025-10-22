import { type SkillGroup } from '../types'

const Skills: React.FC = () => {
    const skills: SkillGroup[] = [
        {
            category: 'Backend Technologies',
            items: ['Python', 'Node.js', 'Next.js']
        },
        {
            category: 'Frameworks',
            items: ['React', 'Express', 'FastAPI', 'Flask', 'Django']
        },
        {
            category: 'Databases',
            items: ['MongoDB', 'MySQL']
        },
        {
            category: 'Core Competencies',
            items: ['Scalable Architecture', 'API Development', 'Database Design', 'Full-Stack Development']
        }
    ]

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-category">
                            <h3>{skillGroup.category}</h3>
                            <div className="skill-tags">
                                {skillGroup.items.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
