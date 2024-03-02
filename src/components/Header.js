import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faHackerrank, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Header = () => {
    const [selected, setSelected] = useState('');
    const toggleSelected = () => {
        setSelected('about')
    }
    return (
        <div className="header">
            <div className="fixed-header">
                <h1 className="">
                    <a href="/" className="username bright-color generic-hover">Pranjal Tripathi</a>
                </h1>
                <h2 className="bright-color">Software Engineer at <a href="https://www.globallogic.com/in/" className="bright-color generic-hover">GlobalLogic</a></h2>
                <p className="tagline v-dull-color">Started as an android developer but time changed me to a web developer.</p>
                <nav className="" aria-label="In-page jump links">
                    <ul className="nav-link">
                        <li>
                            <a className="h-line bright-color" data-to-scrollspy-id="about" href="#about">
                                <span className={selected == 'about' ? "nav-ops aboutSelect" : "nav-ops"} onClick={toggleSelected}><FontAwesomeIcon icon={faAnglesRight} />    ABOUT</span>
                                {/* <span className="">ABOUT</span> */}
                            </a>
                        </li>
                        <li>
                            <a className="h-line bright-color" data-to-scrollspy-id="experience" href="#experience">
                                <span className="nav-ops"><FontAwesomeIcon icon={faAnglesRight} />    EXPERIENCE</span>
                            </a>
                        </li>
                        <li>
                            <a className="h-line bright-color" data-to-scrollspy-id="projects" href="#projects">
                                <span className="nav-ops"><FontAwesomeIcon icon={faAnglesRight} />    PROJECTS</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="social-media">
                    <a href="https://github.com/pranjalvkt" className="brand-icon bright-color"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/pranjalvkt" className="brand-icon bright-color"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="https://www.hackerrank.com/profile/pranjalvkt" className="brand-icon bright-color"><FontAwesomeIcon icon={faHackerrank}/></a>
                    <a href="https://www.instagram.com/pranjalvkt" className="brand-icon bright-color"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://twitter.com/PranjalVKT" className="brand-icon bright-color"><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
            </div>
        </div>
    )
}
export default Header;