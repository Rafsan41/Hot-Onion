import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Breakfasts from '../Beakfasts/Breakfasts';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breakfasts></Breakfasts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;