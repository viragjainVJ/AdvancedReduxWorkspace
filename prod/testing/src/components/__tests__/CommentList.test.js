import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach( () => {
    const initialState = {
        comments: ['comment1', 'comment2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

it('create one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('it shows the text for each comment', () => {
    //use of text() to get all text inside an element
    //use render() to get full component detail
    expect(wrapped.render().text()).toContain('comment1');
    expect(wrapped.render().text()).toContain('comment2');
});