import { Link } from "react-router";

const GridWrapper = ({ 
    title,
    path,
    icon,
    text1,
    text2,
    isIconOnLeft
}: {
    title: string;
    path: string;
    icon: string;
    text1: string;
    text2: string;
    isIconOnLeft: boolean;
}) => {
    return (
        <div className={`w3-row-padding ${isIconOnLeft ? 'w3-light-grey' : ''} w3-padding-64 w3-container`}>
            <div className="w3-content">
                {isIconOnLeft && (
                    <div className="w3-third w3-center">
                        <i className={`fa ${icon} w3-padding-64 w3-text-red w3-margin-right`}></i>
                    </div>
                )}
                <div className="w3-twothird">
                    <h1>
                        <Link 
                            to={path}
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                            {title}
                        </Link>
                    </h1>
                    <h5 className="w3-padding-32">{text1}</h5>
                    <p className="w3-text-grey">{text2}</p>
                </div>

                {!isIconOnLeft && (
                    <div className="w3-third w3-center">
                        <i className={`fa ${icon} w3-padding-64 w3-text-red`}></i>
                    </div>
                )}
            </div>
        </div>
    );
};

const HomePage = () => {
    return ( 
        <>
            <header className="w3-container w3-red w3-center" style={{padding: '64px 16px'}}>
                <h1 className="w3-margin w3-jumbo">Modern React From the Beginning</h1>
                <p className="w3-xlarge">Class Projects</p>
            </header>

            <GridWrapper 
                title="Rating UI"
                path="/rating-ui"
                icon="fa-star"
                text1="Simple star rating UI to learn the basics with. Events, props, state, etc."
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat."
                isIconOnLeft={false}
            />

            <GridWrapper 
                title="Notes App"
                path="/notes-app"
                icon="fa-book"
                text1="Create and delete notes from local storage. Learn about forms and state."
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat."
                isIconOnLeft={true}
            />

            <GridWrapper 
                title="Simple Timer"
                path="/simple-timer"
                icon="fa-hourglass"
                text1="Learn about the useRef hook and persisting data across page reloads."
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat."
                isIconOnLeft={false}
            />

            <GridWrapper 
                title="Crypto Dash"
                path="/cryptodash"
                icon="fa-bitcoin"
                text1="Use the CoinGecko API to create a dashboard for getting prices and other info from Crypto coins."
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat."
                isIconOnLeft={true}
            />

            <GridWrapper   
                title="Shopping Cart UI"
                path="/shopping-cart-ui"
                icon="fa-shopping-cart"
                text1="Use Context API to build a Shopping Cart application"
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat."
                isIconOnLeft={false}
            />
        </>
    );
}
 
export default HomePage;