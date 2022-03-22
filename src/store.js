import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//action constants:
const LOAD_NOODLES = 'LOAD_NOODLES'
const CREATE_NOODLES = 'CREATE_NOODLES'
const DESTROY_NOODLES = 'DESTROY_NOODLES'

//reducers:
const noodlesReducer = (state = [], action) => {
    if (action.type === LOAD_NOODLES) {
        state = action.noodles
    }
    if (action.type === CREATE_NOODLES) {
        state = [...state, action.noodles]
    }
    if (action.type === DESTROY_NOODLES) {
        state = state.filter(noodles => noodles.id !== action.noodles.id);
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
const _createNoodles = (noodles) => { return { type: CREATE_NOODLES, noodles }};
const _destroyNoodles = (noodles) => { return { type: DESTROY_NOODLES, noodles }};

const loadNoodles = () => {
    return async(dispatch) => {
        const noodles = (await axios.get('/api/noodles')).data
        dispatch(_loadNoodles(noodles))
    }
}

const createNoodles = (name, history) => {
    return async(dispatch) => {
        const noodles = (await axios.post('/api/noodles', name)).data;
        dispatch(_createNoodles(noodles))
        history.push(`/${noodles.id}`)
    }
}

const destroyNoodles = (noodles, history) => {
    return async(dispatch) => {
        await axios.delete(`/api/noodles/${noodles.id}`)
        dispatch(_destroyNoodles(noodles))
        history.push('/')
    }
}

export default store;
export { 
    loadNoodles,
    createNoodles,
    destroyNoodles
} 