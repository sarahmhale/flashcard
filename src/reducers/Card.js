import { ADD_CARD } from "../actions/actionTypes";

const Card = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return state.concat([{ term: action.term, definition: action.definition }])
        default:
            return state
    }
}

export default Card