'use strict'
import React from 'react'
import {connect} from 'react-redux'
import actions from '../../actions/actions'
import {bindActionCreators} from 'redux'

class BooksList extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
        this.props.initBooks([{
            id: 1,
            title: "Learn React in 24 Hours",
            description: "",
            price: 7.90
        },{
            id: 2,
            title: "Understanding ECMAScript 6",
            discription: "",
            price: 12.50
        }, {
            id: 3,
            title: "A Byte of Python",
            description: "",
            price: 5.20
        }]);
    }
    render() {
        // console.log(this.props.books);
        const bookslist = this.props.books.map((book) => {
            return (
                <div key={book.id} id={book.id}>
                    <h2>{book.title}</h2>
                    <p>$ {book.price}</p>
                </div>
            );
        });        
        return (
            <div>
                <h1>Hello React</h1>
                {bookslist}
            </div>            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initBooks: actions.postBooks,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);