import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

//1 approach
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from 'reducers';

let wrapped;

//1 Appraoch
// beforeEach( () => {
//     wrapped = mount(
//         <Provider store = {createStore(reducers, {})}>
//             <CommentBox />            
//         </Provider>
//     );
// });

beforeEach( () => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

//It will unmount after each it statements
afterEach( () => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
    beforeEach( () => {
        //Simulation
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        //Update
        wrapped.update();
    });

    //Simulate used to make fake component, we use simulate(event[, mock])
    //mock: we pass an object which used for an event
    it('has a textarea that users can type in', () => {
        //prop(key) node of the current wrapper
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        //Simulate form for handleSubmit
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
});

    
})