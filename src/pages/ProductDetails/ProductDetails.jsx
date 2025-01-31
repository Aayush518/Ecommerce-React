import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  // In a real app, fetch product details from API
  const product = {
    id,
    bagTitle: "Premium Leather Tote",
    bagPrice: 299.99,
    bagImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1470&fit=crop",
    description: "Crafted from premium full-grain leather, this tote combines timeless elegance with modern functionality. Perfect for everyday use, it features a spacious interior, laptop compartment, and multiple pockets for organization.",
    features: [
      "Full-grain leather construction",
      "15-inch laptop compartment",
      "Interior zip pocket",
      "Magnetic closure",
      "Adjustable straps"
    ],
    specifications: {
      dimensions: "16\" x 12\" x 6\"",
      weight: "2.5 lbs",
      material: "Full-grain leather",
      warranty: "Lifetime warranty"
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-grid">
        <div className="product-image">
          <img src={product.bagImage} alt={product.bagTitle} />
        </div>
        <div className="product-info">
          <h1>{product.bagTitle}</h1>
          <p className="price">${product.bagPrice}</p>
          <p className="description">{product.description}</p>
          
          <div className="features">
            <h2>Features</h2>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="specifications">
            <h2>Specifications</h2>
            <div className="specs-grid">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <span className="spec-label">{key}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <button 
              className="add-to-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button 
              className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
              onClick={() => addToWishlist(product)}
            >
              {isInWishlist(product.id) ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;