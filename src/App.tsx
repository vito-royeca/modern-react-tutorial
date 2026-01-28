import { BrowserRouter, Route, Routes } from "react-router"

import AboutPage from "./pages/about"
import CryptoDash from "./cryptodash/index"
import CoinDetails from "./cryptodash/coinDetails"
import HomePage from "./pages/home"
import NotFoundPage from "./pages/not-found"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptodash" element={<CryptoDash />} />
        <Route path="/cryptodash/:id" element={<CoinDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
