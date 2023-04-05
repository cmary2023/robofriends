 
import React from 'react';


// component  return a card
const Card = ({name, email, id}) => { 
  
  return (
   
    <div className='tc grow bg-lightest-blue br3 pa3 ma3 dib bw2 shadow-5'>
      <img  src={`https://robohash.org/set_set4/ ${id}?size=300x300 `} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
   );
}

export  default Card;
