import { TOGGLE_THEME, ADD_CARD } from './actionTypes'

export const toggleTheme = theme => ({
    type: TOGGLE_THEME,
    payload: theme,
})

export const addCard = () => ({
    type: ADD_CARD
})