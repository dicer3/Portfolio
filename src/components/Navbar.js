import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [active, setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About');
        else if (currentURL.endsWith('/projects'))
            setActive('Projects')
        else if (currentURL.endsWith('/resume'))
            setActive('Resume')

    }, [active])

    const navbar_variant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="navbar"
            variants={navbar_variant}
            initial='hidden'
            animate='visible'

        >

            <Link to="/">
                <div className={`navbar__item ${active === 'About' ? 'navbar__active' : ''}`} onClick={() => setActive('About')}>About</div>
            </Link>
            <Link to="/projects">
                <div className={`navbar__item ${active === 'Projects' ? 'navbar__active' : ''}`} onClick={() => setActive('Projects')}>Projects</div>
            </Link>

        </motion.div >
    );
};

export default Navbar;