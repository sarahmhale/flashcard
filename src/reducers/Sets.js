import { ADD_SET, DELETE_SET, UPDATE_SET } from "../actions/actionTypes";

const Sets = (state = [], action) => {
    switch (action.type) {
        case ADD_SET:
            return state.concat([{ id: action.id }])
        // case DELETE_SET:
        //     let newState = [...state];
        //     newState.splice(action.index, 1);
        //     return newState;
        // case UPDATE_CARD:
        //     return updateObjectInArray(state, action)
        default:
            return state
    }
}

export default Sets