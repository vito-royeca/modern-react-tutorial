import { BrowserRouter, Route, Routes } from "react-router"

import AboutPage from "./pages/about"
import CoinGecko from "./coingecko"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"
import CoinDetails from "./coingecko/coinDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coingecko" element={<CoinGecko />} />
        <Route path="/coingecko/:id" element={<CoinDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
