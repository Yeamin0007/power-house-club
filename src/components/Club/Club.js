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

    const handleAddToList= (workout) =>{
        console.log(workout)
    }


    return (
        <div className='club-container'>
            
            <div>
                <h1 className='club-tittle'>This Week,<span className='club-tittle-span'> Be a Goal Crusher</span></h1>
            <div className='workout-container'>
                {
                   workouts.map(workout=> <Workout 
                    key={workout.id}
                    workout={workout}
                    handleAddToList={handleAddToList}
                    ></Workout>) 
                }

            </div>
            </div>
            <div className='calculation-container'>
                <h1>jahid</h1>

            </div>
        </div>
    );
};

export default Club;