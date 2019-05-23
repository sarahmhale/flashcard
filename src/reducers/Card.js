import { ADD_CARD, DELETE_CARD } from "../actions/actionTypes";

const Card = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return state.concat([{ term: action.term, definition: action.definition }])
        case DELETE_CARD:
            let newState = [...state];
            newState.splice(action.index, 1);
            return newState;
        default:
            return state
    }
}

export default Card