import { useState } from 'react';
import { User, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };

  const orders = [
    {
      id: "#ORD-123456",
      date: "2024-03-15",
      status: "Delivered",
      total: 299.99,
      items: [
        {
          name: "Premium Leather Tote",
          price: 299.99,
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1470&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-header">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>

        <nav className="profile-nav">
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={20} />
            Profile
          </button>
          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingBag size={20} />
            Orders
          </button>
          <button 
            className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
            onClick={() => setActiveTab('wishlist')}
          >
            <Heart size={20} />
            Wishlist
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            Settings
          </button>
          <button className="nav-item logout">
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </div>

      <div className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <h2>Personal Information</h2>
            <form className="profile-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={user.name} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={user.email} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+1 (123) 456-7890" />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" placeholder="New York, USA" />
                </div>
              </div>
              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="orders-section">
            <h2>Order History</h2>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div>
                      <h3>{order.id}</h3>
                      <p>Ordered on {order.date}</p>
                    </div>
                    <span className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  ))}
                  <div className="order-footer">
                    <span>Total: ${order.total}</span>
                    <button className="track-btn">Track Order</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;