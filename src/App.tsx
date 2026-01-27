import { BrowserRouter, Route, Routes } from "react-router"

import AboutPage from "./pages/about"
import CoinGecko from "./coingecko"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coingecko" element={<CoinGecko />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
