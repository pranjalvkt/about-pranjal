import ScrollSpy from "react-ui-scrollspy";
import jobsy1 from '../img/jobsy1.png';
import jobsy2 from '../img/jobsy2.png';
import jobsy3 from '../img/jobsy3.png';
import appmine1 from '../img/appmine1.png';
import appmine2 from '../img/appmine2.png';
import appmine3 from '../img/appmine3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
    return (
        <div className="main">
            <ScrollSpy>
                <section id="about" class="" aria-label="About me">
                    <div>
                        <p className="dull-color aboutme">Back in 2018, I decided to try my hand at creating web apps and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an <span className="bright-color bold">start-up</span> and a <span className="bright-color bold">huge corporation</span>.
                        </p>
                        <p className="dull-color aboutme">My main focus these days is building products for our clients at <span className="bright-color bold">GlobalLogic</span>. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I have created lots of projects which you can checkout <a className="bright-color bold generic-hover" href="#projects">here</a>.
                        </p>
                        <p className="dull-color aboutme">When I’m not at the computer, I’m usually reading, writing, singing or hanging out with my friends and family.
                        </p>
                    </div>
                </section>
                <section id="experience" class="" aria-label="About me">
                    <div className="experiences">
                        <div className="years-div">
                            <p className="years v-dull-color">July 2022 - Present</p>
                        </div>
                        <div className="experience-div">
                            <h3 className="bright-color company-name">Software Engineer • GlobalLogic</h3>
                            <h3 className="v-dull-color">Front-End Developer</h3>
                            <p className="dull-color desc">As a front-end developer, developed and maintained high-quality web applications for clients including Manchester Metropolitan University, Royal college of Arts, Selkirk College (British Columbia) and more. Migrated a multi-page application into single-page application using ReactJS.</p>
                            <ul className="flex-wrap">
                                <li className="active-color skills">JavaScript</li>
                                <li className="active-color skills">HTML</li>
                                <li className="active-color skills">CSS</li>
                                <li className="active-color skills">React</li>
                                <li className="active-color skills">PHP</li>
                                <li className="active-color skills">Wordpress</li>
                                <li className="active-color skills">JQuery</li>
                                <li className="active-color skills">Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="projects" aria-label="About me">
                    <div className="projects">
                        <div className="project-name">
                            <img src={jobsy1} className="img-size"/>
                            <img src={jobsy2} className="img-size"/>
                            <img src={jobsy3} className="img-size"/>
                        </div>
                        <div className="project-div">
                            <h3 className="bright-color company-name">Job seekers Portal</h3>
                            <p className="dull-color desc">A React based web application running over firebase, containing User and Admin story. User can register itself or login into an existing account. One can apply for a job, or save a job for later, can view how many jobs he/she has already applied and user can maintain there profile as well.</p>
                            <p className="dull-color desc">Admin can register itself or login into an existing account. Admin can create a new job, update and delete a existing one. Admin can also view how many users have applied for a particular job.</p>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="project-name">
                            <img src={appmine1} className="img-size"/>
                            <img src={appmine2} className="img-size"/>
                            <img src={appmine3} className="img-size"/>
                        </div>
                        <div className="project-div">
                            <h3 className="bright-color company-name">AppMine Software Store</h3>
                            <p className="dull-color desc">This is a Web Application for Installing & Publishing a software. This web application is based on Node.js server (Express framework) and MongoDB (NoSQL database) at the Backend. Node.js is integrated with EJS (Embedded JavaScript) pages, and CSS (Cascading Style Sheet), JS (JavaScript) for the Frontend.</p>
                            <p className="dull-color desc">One stop-App store for all the platforms. User can download applications hassle free without worrying about device compatibility. And Developer can register themselves and publish new application..</p>
                        </div>
                    </div>
                    <a href="https://github.com/pranjalvkt?tab=repositories" className="bright-color generic-hover">View Full Project Archive <FontAwesomeIcon icon={faArrowRight} /></a>
                </section>
                
            </ScrollSpy>
        </div>
    )
}
export default Main;