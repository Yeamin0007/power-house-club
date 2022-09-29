import React, { useState } from 'react';
import './Calculation.css'
import { ToastContainer, toast } from 'react-toastify';

const Calculation = (props) => {
    
    const { times } = props;
    

    let workoutTime = 0;
    for (const workouts of times) {
        workoutTime = workoutTime + workouts.time;
    }

    const [breakTimes, setBreaks] = useState(0);
    const handleAddBreakTime = (breaktime) => {
        setBreaks(breaktime)
    }

    const handleCompleteBtn = () => toast.success("Congratulation. You Completed Today's Goal.");

    return (
        <div className='calculation'>
            <div className='calc-head-div'>
                <h1 className='calc-tittle'>Meet The Founder</h1>
                <h3>Yeamin Hossain</h3>
                <p><small>Junior web developer</small></p>
                <p><small>Age: 23</small></p>
                
                <p>Email: mendis66@gmail.com</p>

            </div>
            <div className='cal-extra-header'>
            <h2>Add a break</h2>
            </div>
            
            <div className='break-btn'>
            <button onClick={() => handleAddBreakTime(10)}>10s</button>
                <button onClick={() => handleAddBreakTime(20)}>20s</button>
                <button onClick={() => handleAddBreakTime(30)}>30s</button>
                <button onClick={() => handleAddBreakTime(40)}>40s</button>
                <button onClick={() => handleAddBreakTime(50)}>50s</button>
                </div>

                <div className='cal-extra-header'>
                <h2>Exercise Details</h2>
                </div>

                <div className='exercise-time'>
                <p>Exercise time: {workoutTime}</p>
                </div>
                <div className='break-time'>
                <p >Break Time: {breakTimes}</p>
                </div>

                <div className='comp-btn-div'>
                    <button onClick={handleCompleteBtn} className='complete-btn'>Activity Completed</button>
                    <ToastContainer />
                </div>
            
            
        </div>
    );
};

export default Calculation;