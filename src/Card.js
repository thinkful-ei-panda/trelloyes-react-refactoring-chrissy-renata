import React from 'react';
import './styles/Card.css';


function Card(props) {
    return (
    <div className='Card'>
    <button type="button" onClick={() => props.onClickDelete(props.id)}>
    delete
      </button>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

Card.propTypes = {
    onClickDelete: () => {}
}

export default Card;