export function popularCategories(state = [], action) {
    switch(action.type) {
        case 'fetch':
            return state.concat([action.text])
        defolt:
            return state
    }
}
