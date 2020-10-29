import DUMMY_DATA from './dummy.data'

const INITIAL_STATE = {
    collections: DUMMY_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer
