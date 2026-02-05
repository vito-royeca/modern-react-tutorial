type QuoteProps = {
    quote: string
};

const Quote: React.FC<QuoteProps> = ({
    quote
}) => {
    return ( 
        <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
            <h1 className="w3-margin w3-xlarge">{quote}</h1>
        </div>
    );
}
 
export default Quote;