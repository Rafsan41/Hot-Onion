import React from 'react';
import adult from '../../../All-Images & logos/Image/adult-blur-blurred-background-687824.png'
import architecture from '../../../All-Images & logos/Image/architecture-building-city-2047397.png'
import cheaf from '../../../All-Images & logos/Image/chef-cook-food-33614.png'
import Review from '../Review/Review';

const reviews = [
        {
            id: 'rvw1',
            name: 'first Delivery',
            img:'https://i.ibb.co/F4cHz0r/adult-blur-blurred-background-687824.png',
            discription:'Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future'
        },
        {
            id: 'rvw2',
            name: 'A Good Auto Responder',
            img:'https://i.ibb.co/3vd5jc7/chef-cook-food-33614.png',
            discription:'Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future'
        },
        {
            id: 'rvw3',
            name: 'Home Delivery',
            img:'https://i.ibb.co/vVR7VjJ/architecture-building-city-2047397.png',
            discription:'Keep your system in sync with automated web hook based notification each time link is paid and how we dream about our future'
        },
    ]


const Reviews = () => {
    return (
        <div className='container'>
            <h2>Why Chose You Us</h2>
            <p>Barton waited twenty always repire in within we do. An deloghted offending curioursity my dashwoods at . Boy prosperous increasing surrounded</p>
            <div className='row'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;