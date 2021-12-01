import { addMenuCategories } from '../../constants'

export function menuCategories(state = [], action) {
    switch(action.type) {
        case addMenuCategories:
            return state.concat([action])
        default:
            return state
    }
}