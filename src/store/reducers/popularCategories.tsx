export function popularCategories(state = [], action) {
    switch(action.type) {
        case 'addCatigories':
            return state.concat([action])
        default:
            return state
    }
}
