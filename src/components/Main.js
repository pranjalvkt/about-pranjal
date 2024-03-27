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
                        <p className="dull-color aboutme">Back in 2018, I decided to try my hand at creating web apps and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, I specialize in web development, with a focus on optimizing performance and scalability. Notably, I led initiatives to enhance load times and user experience for a company's web application, alongside successfully migrating a complex application to ReactJS.
                        </p>
                        <p className="dull-color aboutme">My expertise spans full-stack development, emphasizing major feature delivery, and adherence to accessibility standards. Proficient in JavaScript, HTML/CSS, and Agile methodologies, I've received recognition for improving application performance and modernizing interfaces.
                        </p>
                        <p className="dull-color aboutme">Outside of work, I enjoy creating personal projects and spending time with loved ones.
                        </p>
                    </div>
                </section>
                <section id="experience" class="" aria-label="About me">
                    <div className="experiences">
                        <div className="years-div">
                            <p className="years v-dull-color">July 2022 - Present</p>
                            <ul className="flex-wrap">
                                <li className="active-color skills">JavaScript</li>
                                <li className="active-color skills">HTML</li>
                                <li className="active-color skills">CSS</li>
                                <li className="active-color skills">React</li>
                                <li className="active-color skills">PHP</li>
                                <li className="active-color skills">WordPress</li>
                                <li className="active-color skills">JQuery</li>
                                <li className="active-color skills">Bootstrap</li>
                                <li className="active-color skills">Docker</li>
                            </ul>
                        </div>
                        <div className="experience-div">
                            <h3 className="bright-color company-name">Software Engineer • GlobalLogic</h3>
                            <h3 className="v-dull-color">Front-End Developer</h3>
                            <p className="dull-color desc">In my role as a front-end developer, I have been instrumental in the creation and continuous enhancement of premium web applications tailored to prestigious clients such as Manchester Metropolitan University, Royal College of Arts, Selkirk College (British Columbia), and numerous others. Notably, I led the migration of a multi-page application to a single-page application leveraging ReactJS. Furthermore, I have consistently optimized the performance and scalability of web applications while prioritizing improvements in accessibility standards.</p>
                            
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
                            <p className="dull-color desc">The project comprises a React-based web application hosted on Firebase, featuring distinct User and Admin functionalities. Users are able to register or log in to their accounts, enabling them to apply for jobs, save job listings for future reference, track the number of applications submitted, and manage their profiles.</p>
                            <p className="dull-color desc">Administrators have separate authentication capabilities, allowing them to register or log in as an Admin. Admins possess the authority to create new job listings, update or remove existing ones as necessary. Additionally, Admins have access to view the number of user applications received for each job listing, providing valuable insights for recruitment management.</p>
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
                            <p className="dull-color desc">TThis web application is designed to serve as a unified platform where users can both install and publish software. It is constructed using the MERN Stack, which comprises MongoDB, Express.js, React.js, and Node.js.</p>
                            <p className="dull-color desc">Functioning as a unified app store across various platforms, users can seamlessly download applications without concerns regarding device compatibility. Furthermore, developers have the ability to register and publish new applications, facilitating efficient distribution and access to a wide range of software offerings.</p>
                        </div>
                    </div>
                    <a target="blank" href="https://github.com/pranjalvkt?tab=repositories" className="bright-color generic-hover">View Full Project Archive <FontAwesomeIcon icon={faArrowRight} /></a>
                </section>
                
            </ScrollSpy>
        </div>
    )
}
export default Main;