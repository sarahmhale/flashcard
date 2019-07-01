import {
    ADD_SET,
    DELETE_SET,
    UPDATE_SET,
} from './actionTypes'

export const addSet = set => ({
    type: ADD_SET,
    id: set.id,
    cards: []
})

// export const updateSet = action => ({
//     type: UPDATE_SET,
//     index: action.index,
//     item: { term: action.term, definition: action.definition }
// })


// export const deleteSet = index => ({
//     type: DELETE_SET,
//     index: index
// })