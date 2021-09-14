import React from 'react'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mail from '../assets/icons/gmail.svg'
import phone from '../assets/icons/phone.png'
import mightycoder from '../assets/pragun.jpeg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'
const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:pragungandotra7@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }
    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Pragun <span>Gandotra</span> </div>
            <div className="sidebar__item sidebar__title">Software Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/dicer3" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3" />dicer3</a>
                </div>
                <div className="sidebar__item sidebar__github">
                    <a href="https://www.linkedin.com/in/pragun-gandotra-b987b2169/" target="_blank"><img src={linkedin} alt="github" className="sidebar__icon mr-3" />pragun7</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Jammu, India</div>
                <div className="sidebar__location my-2">
                    <img src={mail} alt="location" className="sidebar__icon mr-1" />
                    pragungandotra7@gmail.com</div>
                <div className="sidebar__location">
                    <img src={phone} alt="location" className="sidebar__icon mr-2 mb-2" />
                    +918899850492</div>
                {/* <div className="sidebar__item">pragungandotra7@gmail.com</div>
                <div className="pb-2">+918899850492</div> */}
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;