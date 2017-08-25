'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {Panel, Well, Row, Col, Button} from 'react-bootstrap'

class Cart extends React.Component {
    renderEmpty() {
        return (<div></div>);
    }

    renderCart() {
        const cartItems = this.props.cart.map((cartItem) => {
            return (
                <Panel key={cartItem.id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartItem.title}</h6>
                        </Col>
                    </Row>
                </Panel>
            );
        });
        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItems}
            </Panel>
        );
    }

    render() {
        if (this.props.cart[0]) {
            this.renderCart();
        } else {
            this.renderEmpty();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};

export default connect(mapStateToProps)(Cart);
