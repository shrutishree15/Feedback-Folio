import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"; 
const Testimonial = ({reviews}) => {
    const [index,setIndex]=useState(0);
    function leftShiftHandler()
    {
if(index-1<0)
{
    setIndex(reviews.length-1);
}
else{
    setIndex(index-1);
}
    }
     function RightShiftHandler()
    {
if(index+1>=reviews.length)
{
    setIndex(0);
}
else{
    setIndex(index+1);
}
    }

    function SurpriseHandler()
    {
let randomIndex=Math.floor(Math.random()*reviews.length);
setIndex(randomIndex);
    }

  return (
    <div className='test'>
      
        <Card review={reviews[index]}/>
<div>
        <button onClick={leftShiftHandler}>
    <FiChevronLeft/>
</button>
<button onClick={RightShiftHandler}>
    <FiChevronRight/>
</button>
</div>
<div>
    <button onClick={SurpriseHandler}>
        Surprise Me
    </button>
</div>
     
    </div>
  )
}

export default Testimonial;
