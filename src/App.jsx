import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from './Components/Hero/Hero.jsx';
import SupportedBy from './Components/SupportedBy/SupportedBy.jsx';
import BrandsCards from './Components/BrandsCards/BrandsCards.jsx';
import Bags from './Components/Bags/Bags.jsx';
import HoldingBags from './Components/HoldingBags/HoldingBags.jsx';
import Wishlist from './Components/WishList/Wishlist.jsx'; 
import Footer from './Components/Footer/Footer.jsx';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Hero />
      <BrandsCards />
      <Bags />
      <Wishlist />
      <SupportedBy />
      <HoldingBags />
      <Footer />
    </CartProvider>
  );
}

export default App;