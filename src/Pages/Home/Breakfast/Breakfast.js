import React from 'react';
import './Breakfast.css'
const Breakfast = ({ breakfast }) => {
    const {name, discription,price, img } = breakfast;
    return (
<div className=' breakfast'>
 <div className="row  mb-5 g-5">
  <div className="col">
    <div className="card ">
      <img width='400px' height='350px' src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
           <h5 className="card-title">{name}</h5>
         <p className="card-text">{discription}</p>
        <h2>$<span>{price}</span></h2>  
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Breakfast;