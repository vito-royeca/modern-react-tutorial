const HomePage = () => {
    return ( 
        <>
            <header className="w3-container w3-red w3-center" style={{padding: '64px 16px'}}>
                <h1 className="w3-margin w3-jumbo">Modern React From the Beginning</h1>
                <p className="w3-xlarge">Class Projects</p>
            </header>
            <div className="flex p-30 m-auto justify-center items-center h-full">
                <ol>
                    <li><a href="/rating-ui">Rating UI</a></li>
                    <li><a href="/notes-app">Notes App</a></li>
                    <li><a href="/cryptodash">Crypto Dash</a></li>
                    <li><a href="/shopping-cart-ui">Shopping Cart UI</a></li>
                </ol>
            </div>
        </>
    );
}
 
export default HomePage;