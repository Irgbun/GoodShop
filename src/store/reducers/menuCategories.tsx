export function menuCategories(state = [], action) {
    switch(action.type) {
        case 'fetch':
            return state.concat([action.text])
        defolt:
            return state
    }
}