import { ADD_CARD } from "../actions/actionTypes";

const Card = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            console.log("add card")
            return state.concat([{ term: action.term, definition: action.definition }])
        default:
            console.log("default")
            return state
    }
}

export default Card