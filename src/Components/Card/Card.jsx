import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="we-supported-by">
      <h2 className="title">We Supported By</h2>
      <div className="features">
        <div className="feature">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <h3>EXPRESS DELIVERY</h3>
          <p>DHL express delivery worldwide from our bag company</p>
        </div>
        <div className="feature">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
          <h3>PAYMENT IN 3X</h3>
          <p>Take advantage of a payment in 3x without fees from $100 of purchase</p>
        </div>
        <div className="feature">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
          <h3>FREE RETURNS</h3>
          <p>Free return for 7 days for any order delivered in France</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


