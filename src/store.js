import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//action constants:
const LOAD_NOODLES = 'LOAD_NOODLES'

//reducers:
const noodlesReducer = (state = [], action) => {
    if (action.type === LOAD_NOODLES) {
        state = action.noodles
    }
    return state;
}


//OLD store:
// const store = createStore((state = { noodles: [] }, action) => {
//     console.log(action)
//     if (action.type === LOAD_NOODLES) {
//         state = {...state, noodles: action.noodles}
//     }
//     return state;
// })

const reducer = combineReducers({
    noodles: noodlesReducer
})

//store:
const store = createStore(reducer, applyMiddleware(thunk, logger))

//OLD action creators:
// const loadNoodles = (noodles) => { return { type: LOAD_NOODLES, noodles }};



//action creators:
const _loadNoodles = (noodles) => { return { type: LOAD_NOODLES, noodles }};

const loadNoodles = () => {
    return async(dispatch) => {
        const noodles = (await axios.get('/api/noodles')).data
        dispatch(_loadNoodles(noodles))
    }
}

export default store;
export { 
    loadNoodles
} 