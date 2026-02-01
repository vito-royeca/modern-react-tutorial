const Footer = () => {
    return ( 
        <footer className="w3-container w3-padding-64 w3-center w3-opacity">  
            <div className="w3-xlarge w3-padding-32">
                Source Code available in GitHub &nbsp;
                <a href="https://github.com/vito-royeca/modern-react-tutorial" target="_blank">
                <i className="fa fa-github w3-hover-opacity"></i>
                </a>
            </div>
            <p>Made with <i className="fa fa-heart"></i> by<br /><a href="https://www.vitoroyeca.me" target="_blank"><strong>Vito Royeca</strong></a></p>
        </footer>
    );
}
 
export default Footer;