import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Workout from '../Workout/Workout';
import './Club.css'

const Club = () => {
    const [workouts, setWorkouts] = useState([])
    const [times ,setTimes]= useState([])

    useEffect(() =>{
        fetch('club.json')
        .then(res=> res.json())
        .then(data => setWorkouts(data))
    },[])

    const handleAddToList= (workout) =>{
        const newTimes = [...times, workout];
        setTimes(newTimes);
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
                <Calculation times={times}>
                </Calculation>

            </div>
        </div>
    );
};

export default Club;