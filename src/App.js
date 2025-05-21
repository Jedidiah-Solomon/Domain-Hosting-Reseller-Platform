import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LiveChat from "./components/LiveChat"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
      <LiveChat />
    </div>
  )
}

export default App
