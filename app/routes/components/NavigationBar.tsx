
import { useState } from 'react'
import { Link } from 'react-router';
import { FaBars, FaCaretDown, FaHome } from 'react-icons/fa';

const NavigationBar = () => {
    const [projectsNavOpen, setProjectsNavOpen] = useState(false);
    const [smallNavOpen, setSmallNavOpen] = useState(false);

    return ( 
        <nav>
            <div className="w3-top">
                <div className="w3-bar w3-red w3-card w3-left-align w3-large">
                    <button
                        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"
                        onClick={() => setSmallNavOpen(!smallNavOpen)}>
                        <FaBars className='fa'/>
                    </button>
                    <Link
                        to="/"
                        className="w3-bar-item w3-button w3-hide-small w3-hover-white">
                            <FaHome className='fa'/>
                    </Link>
                    <Link
                        to="/about"
                        className="w3-bar-item w3-button w3-hide-small w3-hover-white">
                            About
                    </Link>

                    <div className="w3-dropdown-hover">
                        <button
                            className="w3-button">
                            Projects <FaCaretDown className='fa' />
                        </button>     
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <Link 
                                to='/rating-ui'
                                className='w3-bar-item w3-button'>
                                Rating UI
                            </Link>
                            <Link 
                                to='/notes-app'
                                className='w3-bar-item w3-button'>
                                Notes App
                            </Link>
                            <Link 
                                to='/simple-timer'
                                className='w3-bar-item w3-button'>
                                Simple Timer
                            </Link>
                            <Link 
                                to='/cryptodash'
                                className='w3-bar-item w3-button'>
                                Crypto Dash
                            </Link>
                            <Link 
                                to='/shopping-cart-ui'
                                className='w3-bar-item w3-button'>
                                Shopping Cart UI
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navbar on small screens */}
                <div
                    className={`w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large${smallNavOpen ? ' w3-show' : ''}`}>
                    <Link
                        to="/"
                        className="w3-bar-item w3-button"
                        onClick={() => setSmallNavOpen(!smallNavOpen)}>
                            Home
                    </Link>
                    <Link
                        to="/about"
                        className="w3-bar-item w3-button"
                        onClick={() => setSmallNavOpen(!smallNavOpen)}>
                            About
                    </Link>
                </div>
            </div>
        </nav>
     );
}

export default NavigationBar;
