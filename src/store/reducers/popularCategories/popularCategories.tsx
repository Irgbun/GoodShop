import { addPopularCategories } from '../../constants'

export function popularCategories(state = [], action) {
    switch(action.type) {
        case addPopularCategories:
            return state.concat([action])
        default:
            return state
    }
}
