import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import List from './List';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List><Card/></List>, div);
    ReactDOM.unmountComponentAtNode(div);
})