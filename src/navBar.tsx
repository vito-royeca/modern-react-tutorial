import { createRoot } from 'react-dom/client'

const NavigationBar = () => {
    // Used to toggle the menu on smaller screens when clicking on the menu button
    function openNav() {
        var x = document.getElementById("navDemo");
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
                    <a href="/" className="w3-bar-item w3-button w3-hide-small w3-hover-white"><i className="fa fa-home"></i></a>
                    <a href="/about" className="w3-bar-item w3-button w3-hide-small w3-hover-white">About</a>
                    <div className="w3-dropdown-hover">
                        <button className="w3-button" title="Notifications">Projects <i className="fa fa-caret-down"></i></button>     
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <a href="/rating-ui" className="w3-bar-item w3-button">Rating UI</a>
                            <a href="/notes-app" className="w3-bar-item w3-button">Notes App</a>
                            <a href="/cryptodash" className="w3-bar-item w3-button">Crypto Dash</a>
                            <a href="/shopping-cart-ui" className="w3-bar-item w3-button">Shopping Cart UI</a>
                        </div>
                    </div>
                </div>

                {/* Navbar on small screens */}
                <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
                    <a href="/" className="w3-bar-item w3-button">Home</a>
                    <a href="about" className="w3-bar-item w3-button">About</a>
                </div>
            </div>
        </>
     );
}
 
createRoot(document.getElementById('navBar')!).render(
  <NavigationBar />
)