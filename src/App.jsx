import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Account from "./pages/Account";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from 'react'
import Preloder from "./components/Preloder";
function App() {
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setScreenLoading(false);
      document.body.classList.remove("overflow-hidden")
    }, 0);
  }, []);
  return (
    <div>
      {screenLoading ? (<Preloder />) : (<div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>)}
    </div>
  )
}

export default App
