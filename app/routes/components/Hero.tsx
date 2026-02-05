type HeroProps = {
    title?: string,
    subtitle?: string
};

const Hero: React.FC<HeroProps> = ({
    title = "[TITLE]",
    subtitle = "[SUBTITLE]"
}) => {
    return ( 
        <header className="w3-container w3-red w3-center" style={{padding: '64px 16px'}}>
            <h1 className="w3-margin w3-jumbo">{title}</h1>
            <p className="w3-xlarge">{subtitle}</p>
        </header>
    );
}
 
export default Hero;