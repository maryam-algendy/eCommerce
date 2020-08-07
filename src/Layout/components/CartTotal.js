import React from 'react';
import {Form, Button} from 'react-bootstrap'

class CartTotal extends React.Component{
    render(){
        return(
            <div className="cart-total">
                <div className=" content">
                    <h5>CART TOTALS</h5>
                    <div className="row">
                        <div className="col-4">
                            <span>Subtotal:</span>
                        </div>
                        <div className="col-8">
                            <span>$39.00</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <span>Shipping:</span>
                        </div>
                        <div className="col-8">
                            <p>There are no shipping methods available.
                                Please double check your address, or contact us if you need any help.</p>
                            <label>CALCULATE SHIPPING</label>
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Control as="select" custom>
                                    <option>select a country</option>
                                    <option>US</option>
                                    <option>UK</option>
                                    <option>Jaban</option>
                                    </Form.Control>
                                    <Form.Control type="text" placeholder="state/ country" />
                                    <Form.Control type="text" placeholder="Postcode / Zip"/>
                                    <Button>update totals</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <span>Total:</span>
                        </div>
                        <div className="col-8">
                            <span>$39.00</span>
                        </div>
                    </div>
                    <Button>proceed to checkout</Button>
                </div>















                <div className="clear"></div>      
            </div>
        )

    }
};
export default CartTotal;