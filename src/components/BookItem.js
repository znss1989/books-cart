'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions/actions'
import {Row, Col, Well, Button} from 'react-bootstrap'

class BookItem extends React.Component {
    handleAdd () {
        const id = this.props.id;
        console.log(this.props);
        this.props.addToCart(id);
    }

    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <h6>$ {this.props.price}</h6>
                        <Button bsStyle='primary' onClick={this.handleAdd.bind(this)}>Buy now</Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToCart: actions.addToCart
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);