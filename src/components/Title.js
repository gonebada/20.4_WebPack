  
import React from 'react';

const Title = props =>
    <div className='title'>
        <h1>{props.title}</h1>
        <p>Task number {props.numberOfTasks}</p>
    </div>;

export default Title;