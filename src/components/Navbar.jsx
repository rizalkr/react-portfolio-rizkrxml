import React, { useState } from 'react'
import LinkNav from './sm-components/LinkNav'
import '../index.css'

export default function Navbar() {
    // Hamburger Navbar
    const [responsive, setResponsive] = useState(false)

    const handleToggle = () => {
        setResponsive(!responsive)
    }
    const handleNavMenu = () => {
        setNavMenu(!navMenu)
    }
    // Navbar Fixed
    window.onscroll = function () {
        const header = document.querySelector('header')
        const fixedNav = header.offsetTop

        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed')
        } else {
            header.classList.remove('navbar-fixed')
        }
    }

    return (
        <header className='navbar-fixed'>
            <div className='container'>
                <div className='relative flex-wrap mt-8 items-center justify-between'>
                    <div className='px-4'>
                        <div className='flex items-center px-4 mb-10'>
                            <button
                                id='hamburger'
                                name='hamburger'
                                type='button'
                                onClick={handleToggle}
                                className={responsive ? 'mb-2 block absolute right-4 hamburger-active' : 'mb-2 block absolute right-4 lg:hidden'}>
                                <span className='hamburger-line transition duration-300 ease-in-out origin-top-left'></span>
                                <span className='hamburger-line transition duration-300 ease-in-out '></span>
                                <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
                            </button>
                        </div>
                        <nav id='nav-menu' className={responsive ? 'nav-menu ' : 'hidden nav-menu'}>
                            <ul className='block lg:flex '>
                                <LinkNav href={'#home'} value={'Home'} />
                                <LinkNav href={'#about'} value={'About'} />
                                <LinkNav href={'#portfolio'} value={'Portfolio'} />
                                <LinkNav href={'#client'} value={'Client'} />
                                <LinkNav href={'#contact'} value={'Contact'} />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
