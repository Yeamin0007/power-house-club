import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-child'>
                <h2>How does react work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='blog-child'>
                <h2>What are the difference between props and state?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='blog-child'>
                <h2>What are the usage of useEffect except data loading in react-js?</h2>
                <p>There are five more cases to use useEffect.-
                    Running on state change: validating input field.
                    Running on state change: live filtering.
                    Running on state change: trigger animation on new array value.
                    Running on props change: update paragraph list on fetched API data update.
                    Running on props change: updating fetched API data to get BTC updated price.</p>
            </div>
            
        </div>
    );
};

export default Blog;