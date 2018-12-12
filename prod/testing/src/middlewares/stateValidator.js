import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);

    // validation going all the out from redux store
    if(!tv4.validate(getState(), stateSchema)){
        console.warn('Invalid state schema detetcted')
    }
};