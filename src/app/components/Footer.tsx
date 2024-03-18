import React from 'react'

// Icons
import { FaCentercode, FaSlack, FaYoutube, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='main-footer wrapper'>
            <div className='main-footer__header'>
                <h2 className='main-footer__header-title'>
                    Made remotely with love by <br /> Start Lab, Inc
                </h2>
                <span className='main-footer__header-logo'><FaCentercode /></span>
            </div>
            <div className='main-footer__nav'>
                <ul className='nav-y'>
                        <h4>Use cases</h4>
                    <li><a href="#">For Designers</a></li>
                    <li><a href="#">For Developers</a></li>
                    <li><a href="#">For Product Managers</a></li>
                    <li><a href="#">For Compliance Managers</a></li>
                </ul>
                <ul className='nav-y'>
                    <h4>Resources</h4>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Libray</a></li>
                    <li><a href="#">Release Notes</a></li>
                    <li><a href="#">Slack Community</a></li>
                </ul>
                <ul className='nav-y'>
                    <h4>Help</h4>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Support Docs</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Feature Requests</a></li>
                </ul>
                <ul className='nav-y'>
                    <h4>Company</h4>
                    <li><a href="#">Stark Framework</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Code of Conduct</a></li>
                </ul>
                <ul className='nav-y'>
                    <h4>Security</h4>
                    <li><a href="#">Security Overview</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">GDPR</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
                <ul className='nav-y'>
                    <h4>Design Integrations</h4>
                    <li><a href="#">Stark for Figma</a></li>
                    <li><a href="#">Stark for FigJam</a></li>
                    <li><a href="#">Stark for Sketch</a></li>
                    <li><a href="#">Stark for Adobe XD</a></li>
                </ul>
                <ul className='nav-y'>
                    <h4>Developer Integrations</h4>
                    <li><a href="#">Stark for Chrome</a></li>
                    <li><a href="#">Stark for Firefox</a></li>
                    <li><a href="#">Stark for Edge</a></li>
                    <li><a href="#">Stark for Safari</a></li>
                    <li><a href="#">Stark for Arc</a></li>
                    <li><a href="#">Stark for Brave</a></li>
                </ul>
            </div>
            <div className='main-footer__bottom'>
                <ul className='main-footer__bottom-social nav-x'>
                    <li><FaXTwitter/></li>
                    <li><FaInstagram/></li>
                    <li><FaSlack/></li>
                    <li><FaLinkedinIn/></li>
                    <li><FaYoutube/></li>
                </ul>
                <span className='main-footer__bottom-copyright uppercase'>
                    Made remotely with love by stark lab, Inc. Copyright 2023
                </span>
            </div>
        </footer>
    )
}

export default Footer