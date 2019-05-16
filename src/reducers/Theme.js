import { COLORS } from '../themes'

const initialState = {
    colorData: COLORS.unfocused
}

const Theme = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            switch (action.payload.name) {
                case 'focused':
                    return { colorData: COLORS.unfocused }
                case 'unfocused':
                    return { colorData: COLORS.focused }

            }
        default:
            return state
    }
}

export default Theme