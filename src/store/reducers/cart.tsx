export function cart(state = [], action) {
    switch(action.type) {
        case 'cart':
            return state.concat([action.text])
        defolt:
            return state
    }
}
