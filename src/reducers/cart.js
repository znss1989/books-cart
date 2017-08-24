'use strict'

const cart = (state=[], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state.cart, action.id];
            break;
        default:
            return state;
    }
};

export default cart;