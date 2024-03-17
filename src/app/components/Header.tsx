import React from 'react'

import { FaCaretDown, FaCentercode } from "react-icons/fa6";

const Header = () => {
    return (
        <header className='main-header'>
            <div className='main-header__container'>
                <div className='main-header__container__left'>
                    <a href='#' className='main-header__container__left__logo'><FaCentercode /></a>
                    <ul className='nav-x'>
                        <li className='btn btn-borderless uppercase'>
                            Use cases
                            <span>
                                <FaCaretDown />
                            </span>
                        </li>
                        <li className='btn btn-borderless uppercase'>
                            Pricing
                        </li>
                        <li className='btn btn-borderless uppercase'>
                            Support
                        </li>
                        <li className='btn btn-borderless uppercase'>
                            Resources
                            <span>
                                <FaCaretDown />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='btn-group-x'>
                    <button className='btn btn-borderless uppercase'>Log in</button>
                    <button className='btn btn-primary uppercase'>Start free trial</button>
                </div>
            </div>
        </header>
    )
}

export default Header