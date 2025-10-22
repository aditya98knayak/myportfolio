import { useState } from 'react'

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen)

    const handleLinkClick = (): void => setIsMenuOpen(false)

    return (
        <nav>
            <div className="container">
                <div className="logo">Portfolio</div>
                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={isMenuOpen ? 'active' : ''}>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    <li>
                        <a href="/resume.pdf" className="download-btn" download>
                            <span className="download-icon">↓</span>Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
