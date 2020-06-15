import React from 'react';
import Card from './Card.js';
import './styles/List.css';

function List(props) {
    return(
        <section className="List">
            <header className="List-header">
                <h1>{props.header}</h1>
            </header>
            {/* Card to show up */}
        <div className="List-cards">
            {props.cards.map((card) => 
            <Card key={card.id} title={card.title} content={card.content}/>
            )}
        </div>
        </section>
    );
}

export default List;