import React from 'react';
import Card from './Card';
import './styles/List.css';

function List(props) {
    return(
        <section className="List">
            <header className="List-header">
                <h1>{props.header}</h1>
            </header>
            
        <div className="List-cards">
            {props.cards.map((card) => 
            <Card 
            key={card.id} 
            id={card.id} 
            title={card.title} 
            content={card.content} 
            onClickDelete={props.onClickDelete}>
            </Card>
            )}
        <button type="button" onClick={() => props.onClickAdd(props.id)}>
                Add Random Card
        </button>
        </div>
        </section>
    )
}

List.defaultProps = {
    onClickAdd: () => {}
}

export default List;