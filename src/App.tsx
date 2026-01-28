import { BrowserRouter, Route, Routes } from "react-router"

// Pages
import AboutPage from "./pages/about"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"

// Crypto Dash
import CryptoDash from "./cryptodash/index"
import CoinDetails from "./cryptodash/coinDetails"

// Shopping Cart UI
import ShoppingCartUI from "./shopping-cart-ui/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Crypto Dash */}
        <Route path="/cryptodash" element={<CryptoDash />} />
        <Route path="/cryptodash/:id" element={<CoinDetails />} />

        {/* Shopping Cart UI */}
        <Route path="/shopping-cart-ui" element={<ShoppingCartUI />} />

        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
