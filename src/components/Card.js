import React from 'react';
import {FaQuoteLeft, FaQuoteRight, faQuoteLeft,faQuoteRight} from 'react-icons/fa';

const Card = ({review}) => {
    
  return (
    <div className='poop'>
      <div className='imagediv'>
        <img src = {review.image} className='imagei'/>
      </div>

      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>

      <div>
        <FaQuoteLeft/>
      </div>
<div>
    {review.text}
</div>
      <div>
        <FaQuoteRight/>
      </div>


    </div>
  )
}

export default Card
