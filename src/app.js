'use strict'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import actions from './actions/actions'
import rootReducer from './reducers/rootReducer'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import BooksList from './components/pages/BooksList'

// store
const middleWare = applyMiddleware(logger);
const store = createStore(rootReducer, middleWare);

// // init and dispatch action
// store.dispatch(actions.postBooks([{
//     id: 1,
//     title: "Learn React in 24hrs",
//     discription: "",
//     price: 7.90
// }]));
// store.dispatch(actions.postBooks([{
//     id: 2,
//     title: "Understanding ECMAScript 6",
//     discription: "",
//     price: 12.50
// }, {
//     id: 3,
//     title: "A Bite of Python",
//     description: "",
//     price: 5.20
// }]));
// store.dispatch(actions.deleteBook(1));
// store.dispatch(actions.updateBook({
//     id: 3,
//     title: "A Byte of Python",
//     description: "",
//     price: 5.20
// }));
// store.dispatch(actions.addToCart(2));

// view
ReactDOM.render(
    <Provider store={store}>
        <BooksList />
    </Provider>, 
    document.getElementById('app')
);