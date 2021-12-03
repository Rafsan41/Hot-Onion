import React from 'react';
import Breakfasts from '../Beakfasts/Breakfasts';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breakfasts></Breakfasts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;