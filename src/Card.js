import React from 'react';
import './styles/Card.css';


function Card(props) {
    return (
    <div className='Card'>
    <h3>Card's Title{props.title}</h3>
    <p>Card's content{props.content}</p>
    </div>
    );
}

export default Card;