import { BrowserRouter, Route, Routes } from "react-router"

// Contexts
import { CartProvider } from "./shopping-cart-ui/context/CartContext"
import { ProductProvider } from "./shopping-cart-ui/context/ProductContext"

// Pages
import AboutPage from "./pages/about"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"

// Simple Timer
import SimpleTimer from "./simple-timer/index"

// Rating UI
import RatingUI from "./rating-ui/index"

// Notes App
import NotesApp from "./notes-app/index"

// Crypto Dash
import CryptoDash from "./cryptodash/index"
import CoinDetails from "./cryptodash/components/CoinDetails"

// Shopping Cart UI
import ShoppingCartUI from "./shopping-cart-ui/index"

// Content Wrapper
import ContentWrapper from "./components/ContentWrapper"

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          { /* Pages */ }
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={
            <ContentWrapper content={<AboutPage />} />
          } />

          { /* Simple Timer */ }
          <Route path="/simple-timer" element={
            <ContentWrapper content={<SimpleTimer />} />
          } />

          {/* Rating UI */}
          <Route path="/rating-ui" element={
            <ContentWrapper content={<RatingUI />} />
          } />

          {/* Notes App */}
          <Route path="/notes-app" element={
            <ContentWrapper content={<NotesApp />} />
          } />

          {/* Crypto Dash */}
          <Route path="/cryptodash" element={
            <ContentWrapper content={<CryptoDash />} />
          } />
          <Route path="/cryptodash/:id" element={
            <ContentWrapper content={<CoinDetails />} />
          } />

          {/* Shopping Cart UI */}
          <Route path="/shopping-cart-ui" element={
            <ProductProvider>
              <CartProvider>
                <ContentWrapper content={
                  <ShoppingCartUI />
                } />
              </CartProvider>
            </ProductProvider>}
          />

          {/* Not Found */}
          <Route path="*" element={
            <ContentWrapper content={<NotFoundPage />} />
          } />

        </Routes>
      </BrowserRouter>
    )
}

export default App
