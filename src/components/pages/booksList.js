'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../../actions/actions'
import BookItem from '../BookItem'
import BooksForm from '../BooksForm'
import {Grid, Row, Col, Button} from 'react-bootstrap'

class BooksList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log(this.props);
        this.props.initBooks([{
            id: 1,
            title: "Learn React in 24 Hours",
            description: "Start with a nice easy introduction to the framework with Wes Bos’ React for Beginners! This will get you started with the framework and the ecosystem around it. You’ll have fun building a single page web app and definitely get your introduction to React.",
            price: 7.90
        },{
            id: 2,
            title: "Understanding ECMAScript 6",
            description: "ECMAScript 6 represents the biggest change to the core of JavaScript in the history of the language. Not only does the sixth edition add new object types, but also new syntax and exciting new capabilities. This book is a guide for the transition between ECMAScript 5 and 6. It is not specific to any JavaScript environment, so it is equally useful to web developers as it is Node.js developers.",
            price: 12.50
        }, {
            id: 3,
            title: "A Byte of Python",
            description: "'A Byte of Python' is a free book on programming using the Python language. It serves as a tutorial or guide to the Python language for a beginner audience. If all you know about computers is how to save text files, then this is the book for you.",
            price: 5.20
        }]);
    }
    render() {
        // console.log(this.props.books);
        const bookslist = this.props.books.map((book) => {
            return (
                // <div key={book.id} id={book.id}>
                //     <h2>{book.title}</h2>
                //     <p>$ {book.price}</p>
                // </div>
                <Col xs={12} sm={6} md={4} key={book.id}>
                    <BookItem id={book.id} title={book.title} description={book.description} price={book.price} />
                </Col>
            );
        });        
        return (
            <Grid>
                <h1>Bookstore</h1>
                <br />
                <Row>
                    <Col xs={12} sm={6}>
                        <BooksForm />
                    </Col>
                </Row>
                <br />
                <Row style={{marginTop: '15px'}}>
                    {bookslist}
                </Row>
            </Grid>        
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