// Description: This component is used to display the stars in the product page
//this is a programming logic to display stars in react
//install react-icons
import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

//suppose stars = 3.5
export default function Star({stars}) { //stars is a prop which has value from 0 to 5
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? ( 
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <div>
      {tempStars}
    </div>
  )
}
//this is the simplest logic:

//stars >= 0+1  
// --> 3.5 >= 1 --> true so BsStarFill
//stars >= 1+1  
// --> 3.5 >= 2 --> true so BsStarFill
//stars >= 2+1  
// --> 3.5 >= 3 --> true so BsStarFill


//stars >= 3+1  
// --> 3.5 >= 4 --> fasle  
//then check stars >= number 
//-->3.5 >= 3.5 --> true so BsStarHalf

//stars >= 4+1
// --> 3.5 >= 5 --> false
//then check stars >= number
//-->3.5 >= 4.5 --> false
//so BsStar

