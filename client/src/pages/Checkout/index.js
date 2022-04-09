import React from "react";
// import logo from "../../image/MealTicket-Logo(no bg).png"
import './checkout-style.css'

import { Container, Form,  Card } from 'react-bootstrap';
import map from '../../image/themap.PNG'


function Checkout () {


    return (
        <Container  id='checkout'>
            <div className='row'>
                <div className='col-xs-5'> 
                    <div className="displayOrder">
                        <h1>American Deli</h1>
                        <img src={map}  className='map' ></img>
                        <p className="loctext"> (icon)3695 Cascade Rd. , Suite M, Atlanta, GA 30331</p>
                        <hr></hr>
                        <div className="pickup">
                        
                                <div className="pickupText"> 
                                    <h3>(icon)Pick Estimate</h3>
                                </div>
                                <div className="pickupTime"> 
                                    <h3>5-10min</h3>
                                </div>
                        </div>

                        <Form>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    active  
                                    type={type}
                                    label={`Now`}
                                    id={`Now-${type}`}
                                
                                />
                                <Form.Check
                                    active  
                                    type={type}
                                    label={`Later`}
                                    id={`Later-${type}`}
                                />
                                </div>
                            ))}
                        </Form>
                        <hr></hr>
                        <div> 
                            <h3 className="paymentTitle">Payment</h3>

                            <div className="addPayment">
                                <h4>Add payment method</h4>
                                <hr></hr>
                            </div>
                        
                            <div className="addPromo">
                                <h4>Add Promo code</h4>
                                <hr></hr>
                            </div>

                        </div>



                    </div>


                </div>
                <div className='col-xs-5 placeOrder'>Hello </div>
            </div>
        </Container>
    )
}




export default Checkout;