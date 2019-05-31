import { TOGGLE_THEME, ADD_CARD, DELETE_CARD, UPDATE_CARD } from './actionTypes'

export const toggleTheme = theme => ({
    type: TOGGLE_THEME,
    payload: theme,
})

export const addCard = card => ({
    type: ADD_CARD,
})

export const updateCard = action => ({
    type: UPDATE_CARD,
    index: action.index,
    item: { term: action.term, definition: action.definition }
})


export const deleteCard = index => ({
    type: DELETE_CARD,
    index: index
})