'use strict'

const actions = {
    postBooks: (books) => {
        return {
            type: "POST_BOOKS",
            payload: books
        };
    },
    deleteBook: (id) => {
        return {
            type: "DELETE_BOOK",
            id
        };
    },
    updateBook: (book) => {
        return {
            type: "UPDATE_BOOK",
            payload: book
        };
    },
    addToCart: (id) => {
        return {
            type: "ADD_TO_CART",
            id
        };
    }
};

export default actions;