import React from 'react'
import "./footer.css"
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>
                    &copy; 2024 Tech Courses E-learning Platform. All rights reserved. <br />
                    Made with <a href=''>Sanjeev Kuumar</a>
                </p>
                <div className='social-links'>
                    <a href=""><FaGithub /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaInstagramSquare /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer