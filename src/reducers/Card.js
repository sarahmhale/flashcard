import { ADD_CARD } from "../actions/actionTypes";

const Card = (state = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state,
                {
                    text: action.text,

                }
            ]
        default:
            return state
    }
}

