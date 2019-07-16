import { ADD_CARD, DELETE_CARD, UPDATE_CARD } from "../actions/actionTypes";



const Card = (state = [], action) => {
    console.log("action card", action)
    switch (action.type) {
        case ADD_CARD:
            return [...state, { term: '', definition: '' }]
        case DELETE_CARD:
            let newState = [...state];
            console.log("state in delete", newState)
            newState.splice(action.index, 1);
            return newState;
        case UPDATE_CARD:
            return updateObjectInArray(state, action)
        default:
            return state
    }
}

//TODO: Get the id card
// const getIncompleteTodos = (state, index) => {
//     return state.todos.filter((todo) => {
//         return !todo.completed
//     });
// }

export default Card

const updateObjectInArray = (array, action) => {

    return array.map((item, index) => {

        if (index !== action.index) {
            return item
        }

        return {
            ...item,
            ...action.item
        }
    })
}