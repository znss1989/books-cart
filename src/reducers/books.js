'use strict'

const books = (state=[], action) => {
    const currentBooks = [...state];
    switch(action.type) {
        case "POST_BOOKS":
            // let books = state.concat(action.payload);
            // return books;
            return [...state, ...action.payload];
        case "UPDATE_BOOK":
            let updatedBooks = currentBooks.map((book) => {
                if (book.id === action.payload.id) {
                    return action.payload;
                }
                return book;
            });
            return updatedBooks;
        case "DELETE_BOOK":
            let filteredBooks = currentBooks.filter((book) => book.id != action.id)
            return filteredBooks;
        default:
            return state;
    };
};

export default books;