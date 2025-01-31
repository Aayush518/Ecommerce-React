import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from './Components/Hero/Hero.jsx';
import SupportedBy from './Components/SupportedBy/SupportedBy.jsx';
import BrandsCards from './Components/BrandsCards/BrandsCards.jsx';
import Bags from './Components/Bags/Bags.jsx';
import HoldingBags from './Components/HoldingBags/HoldingBags.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';
import Login from './Components/Auth/Login.jsx';
import Signup from './Components/Auth/Signup.jsx';
import About from './pages/About/About.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <BrandsCards />
              <Bags />
              <SupportedBy />
              <HoldingBags />
            </>
          } />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;