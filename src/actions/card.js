import {
    ADD_CARD,
    DELETE_CARD,
    UPDATE_CARD,
} from './actionTypes'

export const addCard = (card) => ({
    type: ADD_CARD,
    id: card.id
})

export const updateCard = action => ({
    type: UPDATE_CARD,
    index: action.index,
    item: { term: action.term, definition: action.definition }
})


export const deleteCard = (index, id) => ({
    type: DELETE_CARD,
    index: index,
    id: id
})