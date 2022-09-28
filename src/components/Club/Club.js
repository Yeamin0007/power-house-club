import React, { useEffect, useState } from 'react';
import './Club.css'

const Club = () => {
    const [workouts, setWorkouts] = useState([])

    useEffect(() =>{
        fetch('club.json')
    },[])


    return (
        <div className='club-container'>
            <div className='workout-container'>
                <h1>hossain</h1>

            </div>
            <div className='calculation-container'>
                <h1>jahid</h1>

            </div>
        </div>
    );
};

export default Club;