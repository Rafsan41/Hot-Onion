import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import './Breakfasts.css'

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
        .then(data => setBreakfasts(data))
    },[])

    return (
        <div className=''>
        <div className='breakfasts-container '>
            {
                breakfasts.map(breakfast => <Breakfast
                    key={breakfast.id}
                    name={breakfast.name}
                    breakfast = {breakfast}
                ></Breakfast>)
            }
        </div>
        </div>
    );
};

export default Breakfasts;
/*import React, { useEffect, useState } from 'react';


const breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
        .then(data => setBreakfasts(data))
    },[])
    return (
        <div>
            <h1>this is breakfasts</h1>
            {breakfasts.length}
            
        </div>
    );
};

export default breakfasts; */