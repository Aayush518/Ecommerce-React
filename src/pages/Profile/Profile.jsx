import { useState } from 'react';
import { User, Package, Heart, Settings, Edit2 } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('personal');

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    address: "123 Fashion Street, New York, NY 10001",
    profilePicture: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    joinDate: "January 2024"
  };

  const recentOrders = [
    {
      id: "ORD-2024-001",
      date: "March 15, 2024",
      status: "Delivered",
      items: [
        {
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&fit=crop",
          name: "Premium Leather Tote"
        }
      ],
      total: 299.99
    },
    {
      id: "ORD-2024-002",
      date: "March 10, 2024",
      status: "Processing",
      items: [
        {
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&fit=crop",
          name: "Classic Shoulder Bag"
        }
      ],
      total: 199.99
    }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>

      <div className="profile-grid">
        <div className="profile-sidebar">
          <div className="profile-picture">
            <img src={user.profilePicture} alt={user.name} />
          </div>
          <div className="profile-name">
            <h2>{user.name}</h2>
            <p>Member since {user.joinDate}</p>
          </div>
          <div className="profile-menu">
            <a 
              href="#personal" 
              className={`menu-item ${activeSection === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveSection('personal')}
            >
              <User size={20} />
              Personal Information
            </a>
            <a 
              href="#orders" 
              className={`menu-item ${activeSection === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveSection('orders')}
            >
              <Package size={20} />
              My Orders
            </a>
            <a 
              href="#wishlist" 
              className={`menu-item ${activeSection === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveSection('wishlist')}
            >
              <Heart size={20} />
              Wishlist
            </a>
            <a 
              href="#settings" 
              className={`menu-item ${activeSection === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveSection('settings')}
            >
              <Settings size={20} />
              Settings
            </a>
          </div>
        </div>

        <div className="profile-content">
          <div className="section-title">
            Personal Information
            <button className="edit-button">
              <Edit2 size={16} />
              Edit Profile
            </button>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Full Name</div>
              <div className="info-value">{user.name}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">{user.email}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Phone</div>
              <div className="info-value">{user.phone}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Address</div>
              <div className="info-value">{user.address}</div>
            </div>
          </div>

          <div className="recent-orders">
            <div className="section-title">Recent Orders</div>
            {recentOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <span className="order-number">{order.id}</span>
                  <span className={`order-status status-${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
                <div className="order-items">
                  {order.items.map((item, index) => (
                    <img 
                      key={index}
                      src={item.image} 
                      alt={item.name}
                      className="order-item-image"
                    />
                  ))}
                </div>
                <div className="order-total">
                  Total: ${order.total.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;