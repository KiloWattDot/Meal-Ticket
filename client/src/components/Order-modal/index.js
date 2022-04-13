import React, { useState } from "react";
import { Offcanvas, Button, Form } from "react-bootstrap";
import map from "../../image/themap.PNG";
import './ordermod-style.css'
import {FaMapPin} from "react-icons/fa";




function OrderModal() {
    
function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [order, setOrder] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

  
      alert(
        `Thank you ${order} for contacting  me. I will get back to you shortly...`
      );

      setOrder("");
    };

    return (
      <>
        <button onClick={handleShow} >
          {name}
        </button>

        
        <Offcanvas  show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
                <div >
                    <h1>American Deli</h1>
                    <img src={map} className="map"></img>
                    <p className="loctext-ofc">
                        {" "}
                        <FaMapPin />3695 Cascade Rd. , Suite M, Atlanta, GA 30331
                    </p>
                    <hr></hr>
                

                    <div className="cart-box-ofc">
                        <h3>Your items</h3>
                        <div className="pickup-ofc">
                        <img className="item-image-ofc" src="#"></img>
                        <p>Wings Meal (Fries and Drink)</p>
                        <img className="item-image-ofc" src="#"></img>
                        </div>
                    </div>

                    <Form>
                        <Form.Group
                        className="mb-3"
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
                        className="placeOrder-btn-ofc"
                        text="Place Order"
                    >Place Order</Button>
                    </Form>
                    <div className="price-ofc">
                        <div className="total-ofc">
                        <p>Total</p>
                        </div>
                        <div className="total-amnt-ofc">
                        <p>$2.99</p>
                        </div>
                    </div>
                    
                </div>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
  
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} className="displayOrder-ofc" />
        ))}

      </>

      
    );
  }
  
export default OrderModal;