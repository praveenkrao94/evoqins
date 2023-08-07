import React from 'react';
import './Hero.css';

import ProductView from '../Product/ProductView';

function HeroPage() {
  return (
    <>
    
    <div className="hero-container">
      
      <div className="hero-content">
        <h2 className='heroHeader'>Welcome to <b>marketplace!</b></h2>
        <p>India’s first products marketplace with <br /> advanced tools & apps to empower your every trade!</p>
      </div>
    </div>
    <ProductView/>
    </>
  )
}

export default HeroPage;
