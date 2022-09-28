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
                <h4>Time required: {time}s</h4>
            </div>
            <div className='btn-div'>
            <button onClick={()=>props.handleAddToList(props.workout)} className='btn-list'>
                <p>Add to List</p>
            </button>
            </div>
        </div>
    );
};

export default Workout;