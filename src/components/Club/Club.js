import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './Club.css'

const Club = () => {
    const [workouts, setWorkouts] = useState([])

    useEffect(() =>{
        fetch('club.json')
        .then(res=> res.json())
        .then(data => setWorkouts(data))
    },[])


    return (
        <div className='club-container'>
            <div className='workout-container'>
                {
                   workouts.map(workout=> <Workout 
                    key={workout.id}
                    workout={workout}
                    ></Workout>) 
                }

            </div>
            <div className='calculation-container'>
                <h1>jahid</h1>

            </div>
        </div>
    );
};

export default Club;