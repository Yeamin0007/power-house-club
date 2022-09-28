import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const header = () => {
    return (
        <nav className='header'>
            <div className='title'>
                <FontAwesomeIcon className='dumbbell' icon={faDumbbell} size="2x"></FontAwesomeIcon>
                <h1>Power-House-Club</h1>
            </div>
            <div>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
                <a href="registration">Registration</a>
                
            </div>
        </nav>
    );
};

export default header;