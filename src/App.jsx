import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from './Components/Hero/Hero.jsx';
import SupportedBy from './Components/SupportedBy/SupportedBy.jsx';
import BrandsCards from './Components/BrandsCards/BrandsCards.jsx';
import Bags from './Components/Bags/Bags.jsx';
import HoldingBags from './Components/HoldingBags/HoldingBags.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import Footer from './Components/Footer/Footer.jsx';
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
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;