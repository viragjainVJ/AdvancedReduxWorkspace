export default ({dispatch}) => next => action => {
    // Check to see if the action 
    // has a promise on its payload property
    // If it does, then wait for it to resolve
    //If it doesn't, then send the action on to the 
    // next middleware
    
    //debugger;
    if(!action.payload || !action.payload.then) {
        // We don't care about this as its not having promise
        return next(action);
    }

    // We want to wait for the promise to resolve
    // (get its data!!) and then create a new action
    // with that data and dispatch it
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};