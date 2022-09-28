import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const {name, img, age, info, time} = props.workout;
    return (
        <div className='workout'>
             <img src={img} alt="" />
            <div className='workout-info'>
                <h3>{name}</h3>
                <p><small>{info}</small></p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <div className='btn-div'>
            <button className='btn-list'>
                <p>Add to List</p>
            </button>
            </div>
        </div>
    );
};

export default Workout;