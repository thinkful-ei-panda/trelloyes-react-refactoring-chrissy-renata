import React from 'react';
import Card from './Card.js';
import ReactDOM from 'react-dom';

    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });