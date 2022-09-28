import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    
    const { times } = props;
    

    let workoutTime = 0;
    for (const workouts of times) {
        workoutTime = workoutTime + workouts.time;
    }

    return (
        <div className='calculation'>
            <div className='calc-head-div'>
                <h1 className='calc-tittle'>Meet Your Couch</h1>
                <h3>Nuno Mendis</h3>
                <p><small>Mendis is a Certified Strength and Condition Specialist (CSCS) with the National Strength and Conditioning Association. He has an extensive background from training professional and amateur athletes to working professionals with nominal experience in fitness.</small></p>
                <p>Email: mendis66@gmail.com</p>

            </div>


            <h4>Exercise time: {workoutTime}</h4>
        </div>
    );
};

export default Calculation;