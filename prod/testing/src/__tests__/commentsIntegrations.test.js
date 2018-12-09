import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach( () => {
    //To make moxios start
    moxios.install();
    //to tell moxios if it sees a request, then automatically response to that call
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        //how moxios to repond this request
        status: 200,
        response: [{ name: 'Fetch #1' }, { name: 'Fetched #2' }]
    });
});

afterEach( () => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    //Attempt to render the *entire* App
    const wrapped = mount (
        <Root>
            <App />
        </Root>
    );

    //Find the 'fetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click');
    
    moxios.wait(() => {
        wrapped.update();
        //Expect to find a list of comments!
        expect(wrapped.find('li').length).toEqual(2);
        //call to let know JEST that still function is executing and then complete it
        done();
        wrapped.unmount();
    });
    {/*
    //introduce a TINY little pause
    setTimeout(() => {
        wrapped.update();
        //Expect to find a list of comments!
        expect(wrapped.find('li').length).toEqual(2);
        //call to let know JEST that still function is executing and then complete it
        done();
        wrapped.unmount();
    }, 100);
*/}
});