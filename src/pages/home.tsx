import Header from "../components/Header";
const HomePage = () => {
    return ( 
        <>
            <Header />
            <div>
                <h1>Modern React From the Beginning</h1>
                <ol>
                    <li><a href="/rating-ui">Rating UI</a></li>
                    <li><a href="/cryptodash">Crypto Dash</a></li>
                    <li><a href="/shopping-cart-ui">Shopping Cart UI</a></li>
                </ol>
            </div>
        </>
    );
}
 
export default HomePage;