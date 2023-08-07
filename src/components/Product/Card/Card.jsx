import React from 'react';
import './Card.css';
import Star from './Star'; 

function Card({ product }) {
  const { illustration, title, description, price, offer, price_validity_text, free   , offer_validity_text,   offer_text} = product;

  const cardBodyStyle = {
    fontFamily: "'Hanken Grotesk', sans-serif",
  };

  const badgeStyle = {
    fontFamily: "'Hanken Grotesk', sans-serif",
  };

  return (
    <div className="card" style={{ maxWidth: '350px', flexShrink: 0, borderRadius: '8px', boxShadow: '0px 16px 32px 0px rgba(221, 230, 237, 0.54)' }}>
      <div className="image-wrapper position-relative" style={{ height: '156px', borderRadius: '8px 8px 0px 0px', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 32.29%, rgba(0, 0, 0, 0.48) 100%)' }}>
        <img src={illustration} alt={title} className="card-img-top" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px 8px 0px 0px' }} />
        
        {free && <span className="badge bg-danger text-white" style={{ ...badgeStyle, position: 'absolute', top: '10px', right: '10px' }}>Free</span>}
        
        {offer && <span className="badge bg-danger text-white" style={{ ...badgeStyle, position: 'absolute', top: '10px', left: '10px' }}>Offer</span>}
        
        <div className="rating" style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'orange' }}>
          
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>

      <div className="card-body" style={cardBodyStyle}>
        <h3 className="card-title font-weight-bold">
          {title}
        </h3>
        <p className="card-text">
          {description}
        </p>
        <h4 className="priceMain font-weight-bold pb-1">
          Price : &#8377;{price} <span className='priceClass'>for {price_validity_text}</span>
        </h4>
        <h5 className="card-title">
          {offer}
        </h5>
        <h5 className="OfferPrice" >
          <span className="OfferPrice">Offer Price:</span> <span className='OfferColor'>{offer_text}</span>{offer} for <span className='priceClass' >{offer_validity_text}</span>
        </h5>
        <div className="d-flex justify-content-between">
  <button  target='_blank' className="Text1">View More Details</button>
  <button target='_blank' className="text2">Open an Account</button>
</div>
      </div>
    </div>
  );
}

export default Card;
