import React from 'react';
import { motion } from 'framer-motion'
import Bar from '../Bar';
import { languages } from '../data/resume_data'
import experiences from '../data/experience'
import './about.css'

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
                Hi ! I am Pragun Gandotra , Thankyou for visiting my Website . I provide Web Development Services , Looking forward to provide you service
            </h6>
            <div className="row no-gutters">
                <div className="col-lg-6 resume-languages pl-4">
                    <h5 className="reume-language__heading">
                        Skills
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map((language, i) => <Bar value={language} key={i} />)
                        }
                    </div>
                </div>
                <div className="col-lg-6 mt-3 m-md-0">
                    <h5 className="reume-language__heading">
                        Experience
                    </h5>
                    <div className="exps">
                        {

                            experiences.map((exp) =>
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <div ><span className="font-weight-bold"> {exp.company}</span> <small className="exp-pos">{exp.position}</small></div>  <span className="exp-time">{exp.time}</span>
                                    </div>
                                    <span className="exp-work" dangerouslySetInnerHTML={{__html: exp.work}}></span>
                                    <p className="tech-used">Technologies Used - {exp.TechUsed}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className='edu'>
                        <h5 className="reume-language__heading ">
                            Education
                        </h5>
                        <div className="d-flex justify-content-between">
                            <div ><span className="font-weight-bold"> Thapar University ,Patiala</span> </div>  <span className="exp-time">Aug 2016 - June 2020</span>
                        </div>
                    </div>    
                </div>
            </div>
        </motion.div>
    );
};

export default About;