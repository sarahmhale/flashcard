import { ADD_CARD, DELETE_CARD, UPDATE_CARD } from "../actions/actionTypes";

const Card = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return state.concat([{ term: '', definition: '' }])
        case DELETE_CARD:
            let newState = [...state];
            newState.splice(action.index, 1);
            return newState;
        case UPDATE_CARD:
            return updateObjectInArray(state.Card, action)
        default:
            return state
    }
}

export default Card

const updateObjectInArray = (array, action) => {
    return array.map((item, index) => {
        if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        }
    })
}