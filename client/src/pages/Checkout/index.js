// import Checkout from './pages/Checkout/index.js';
import React, { useState } from "react";
// import logo from "../../image/MealTicket-Logo(no bg).png"
import "./checkout-style.css";
// import wings from '../../image/wingsnfries.jpeg'
// import trash from '../../image/trash.png'
import { Container, Form, Button, Modal, Tab } from "react-bootstrap";
// import map from "../../image/themap.PNG";

function Checkout() {
  const [order, setOrder] = useState("");
  const [showLaterModal, setshowLaterModal] = useState(false);
  const [showNowrModal, setshowNowModal] = useState(false);
  // var newName = localStorage.getItem("name");
  // const handleInput = (e) => {
  //     const {target} = e;
  //     const inputType = target.name
  //     const inputValue = target.value
  //     if (inputType === 'email') {
  //         setContactEmail(inputValue);
  //       } else if (inputType === 'name') {
  //         setContactName(inputValue);
  //       } else {
  //         setContactMessage(inputValue);
  //       }
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    // function to check valid email
    alert(
      `Thank you ${order} for contacting  me. I will get back to you shortly...`
    );
    // set name, email, message
    // save to local storage
    setOrder("");
  };
  return (
    <Container id="checkout">
        <div className="displayOrder">
            <h1>American Deli</h1>
            <img src="#" className="#"></img>
            <p className="loctext">
              {" "}
              (icon)3695 Cascade Rd. , Suite M, Atlanta, GA 30331
            </p>
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
              {["radio"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    active
                    type={type}
                    label={`Now`}
                    id={`Now-${type}`}
                  />
                  {/* FIX THE RADIO BUTTON FUNCTIONALITY */}
                  <Form.Check
                    active
                    type={type}
                    label={`Later`}
                    id={`Later-${type}`}
                    onClick={() => setshowLaterModal(true)}
                  />
                </div>
              ))}
            </Form>
            <hr></hr>
                        {/* ADD EDIT BUTTON */}
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
                {/* FIX YOUR ITEMS FORMATTING */}
            <div className="cart-box">
              <h3>Your items</h3>
              <div className="pickup">
                <img className="item-image" src="#"></img>
                <p>Wings Meal (Fries and Drink)</p>
                {/* CHANGE THE TRASH FUNCTION */}
                <img className="trash-icon" src="#" onClick={() => setshowNowModal(true)}></img>
              </div>
            </div>
            <Form>
              <Form.Group
                className="mb-3 notes"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Form>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="placeOrder-btn"
              text="Place Order"
            >Place Order</Button>
          </Form>
          <div className="price">
              <div className="subtotal">
                <p>Subtotal</p>
              </div>
              <div className="subtotal-amnt">
                <p>$18.99</p>
              </div>
            </div>
          <div className="price">
              <div className="tax">
                <p>Taxes</p>
              </div>
              <div className="tax-amnt">
                <p>$2.99</p>
              </div>
            </div>
          <div className="price">
              <div className="total">
                <p>Total</p>
              </div>
              <div className="total-amnt">
                <p>$2.99</p>
              </div>
            </div>
          </div>
          <Modal
            size='sm'
            show={showLaterModal}
            onHide={() => setshowLaterModal(false)}
            aria-labelledby='signup-modal'>
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey='login'>
              <Modal.Header closeButton>
                <Modal.Title id='signup-modal'>
                  Hello
                </Modal.Title>
              </Modal.Header>
            </Tab.Container>
          </Modal>
          <Modal
            size='sm'
            show={showNowrModal}
            onHide={() => setshowNowModal(false)}
            aria-labelledby='signup-modal'>
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey='login'>
              <Modal.Header closeButton>
                <Modal.Title id='signup-modal'>
                  Hello
                </Modal.Title>
              </Modal.Header>
            </Tab.Container>
          </Modal>
    </Container>
  );
}
export default Checkout;