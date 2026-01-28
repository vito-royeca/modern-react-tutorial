import { BrowserRouter, Route, Routes } from "react-router"

// Pages
import AboutPage from "./pages/about"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"

// Rating UI
import RatingUI from "./rating-ui/index"

// Crypto Dash
import CryptoDash from "./cryptodash/index"
import CoinDetails from "./cryptodash/components/CoinDetails"

// Shopping Cart UI
import ShoppingCartUI from "./shopping-cart-ui/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Rating UI */}
        <Route path="/rating-ui" element={<RatingUI />} />

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
