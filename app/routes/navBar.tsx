
import { Link } from "react-router";

const NavigationBar = () => {
    // Used to toggle the menu on smaller screens when clicking on the menu button
    function openNav() {
        let x = document.getElementById("navDemo");

        if (x !== null && x !== undefined) {
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        }
    }

    return ( 
        <>
            <div className="w3-top">
                <div className="w3-bar w3-red w3-card w3-left-align w3-large">
                    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"
                        href="javascript:void(0);"
                        onClick={openNav}>
                            <i className="fa fa-bars"></i>
                    </a>
                    <Link
                        to="/"
                        className="w3-bar-item w3-button w3-hide-small w3-hover-white">
                            <i className="fa fa-home"></i>
                    </Link>
                    <Link
                        to="/about"
                        className="w3-bar-item w3-button w3-hide-small w3-hover-white">
                            About
                    </Link>

                    <div className="w3-dropdown-hover">
                        <button className="w3-button" title="Notifications">Projects <i className="fa fa-caret-down"></i></button>     
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
                <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
                    <Link
                        to="/"
                        className="w3-bar-item w3-button">
                            Home
                    </Link>
                    <Link
                        to="/about"
                        className="w3-bar-item w3-button">
                            About
                    </Link>
                </div>
            </div>
        </>
     );
}

export default NavigationBar;
