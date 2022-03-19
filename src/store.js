import { createStore } from 'redux';

//action constants:
const LOAD_NOODLES = 'LOAD_NOODLES'

//store:
const store = createStore((state = { noodles: [] }, action) => {
    console.log(action)
    if (action.type === LOAD_NOODLES) {
        state = {...state, noodles: action.noodles}
    }
    return state;
})

//action creators:
const loadNoodles = (noodles) => { return { type: LOAD_NOODLES, noodles }};

export default store;
export { loadNoodles }