import React from 'react';


const Review = ({ review }) => {
    const { name, img, discription } = review;
    return (
        <div className='col-lg-4 col-md-6 text-start'>
            <div className="row  mb-5 g-5">
  <div className="col">
    <div className="card">
      <img width='400px' height='350px' src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
                            <h5 className="card-title">{name}</h5>
        <p className="card-text">{ discription}</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;