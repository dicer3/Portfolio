import React, { useEffect, useState } from 'react'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/pragun.jpeg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'
import sanityClient from "../utils/sanity_client"
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

    const [data, setData] = useState()
    useEffect(() => {
        sanityClient.fetch(
            `*`
        ).then(data => setData(data))
            .catch(err => console.log("err ..", err))
    }, [])

    useEffect(() => {
        console.log("data..", data)
    }, [data])
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
                    <a href="!#"><img src={github} alt="github" className="sidebar__icon mr-3" />dicer3</a>
                </div>
                <div className="sidebar__item sidebar__github">
                    <a href="!#"><img src={linkedin} alt="github" className="sidebar__icon mr-3" />pragun7</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Jammu, India</div>
                <div className="sidebar__item">pragungandotra7@gmail.com</div>
                <div className="sidebar__item">+918899850492</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;