import { addCart } from '../../constants'

export function cart(state = [], action) {
    switch(action.type) {
        case addCart:
            return state.concat([action])
        default:
            return state
    }
}