'use strict'
import React from 'react'
import {findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import actions from '../actions/actions'

class BooksForm extends React.Component {
    handleSubmit() {
        const books = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value,
        }];
        this.props.postBooks(books);
    }

    render() {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" placeholder="Enter title" ref="title" />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="text" placeholder="Enter description" ref="description" />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl type="text" placeholder="Enter price" ref="price" />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save book</Button>
                </Panel>
            </Well>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postBooks: actions.postBooks
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(BooksForm);

// onClick={this.handleSubmit.bind(this)} 