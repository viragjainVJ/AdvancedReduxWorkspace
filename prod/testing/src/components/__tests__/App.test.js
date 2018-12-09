import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// it('shows a comment box', () => {
//     const div = document.createElement('div');

//     ReactDOM.render(<App />, div);
//     // Looks inside the div
//     // and checks to see if the CommentBox is in there
//     //console.log(div.innerHTML);
//     //this is to check internal working
//     //expect(div.innerHTML).toContain('comment box');
//     ReactDOM.unmountComponentAtNode(div);
// });

let wrapped;

//Helper function
beforeEach( () => {
    wrapped = shallow(<App />);
});

it('shows a comment box with enzyme', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list with enzyme', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});