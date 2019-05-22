import { TOGGLE_THEME, ADD_CARD } from './actionTypes'
//import { bindActionCreators } from 'redux';

export const toggleTheme = theme => ({
    type: TOGGLE_THEME,
    payload: theme,
})

export const addCard = card => ({
    type: ADD_CARD,
    term: card.term,
    definition: card.definition
})


export const deleteCard = card => ({
    type: DELETE_CARD,
})