import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key="myKey" header="myHeader" cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<List key="mykey" header="myHeader" cards={[]} />)
    .toJSON();
    expect(tree).toMatchSnapshot(); 
});