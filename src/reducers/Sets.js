import Card from './Card'


const Sets = (state = [], action) => {
    if (typeof action.id !== 'undefined') {
        return {
            ...state,
            [action.id]: Card(state[action.id], action)
        }

    }
    return state
    // switch (action.type) {
    //     case ADD_SET:
    //         return state.concat([{ id: action.id }])

    //     default:
    //         return state
    // }
}

export default Sets