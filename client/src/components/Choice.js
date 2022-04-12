
import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Row, Col, Container, Button  } from 'react-bootstrap';



const Choice = ({holder}) => {

const [containChoice, setContainChoice] = useState([])
  
  // setContainChoice(holder)
  // let item = holder
  console.log(holder)


  useEffect(() => {

    setContainChoice(holder)
  
   }, []);

return (

  <Container fluid className=''>

    
    <img width="auto" height="300"
      className=" mt-3 rounded border border-3 mx-auto d-block "
      src={containChoice.image_url}
      alt="First slide"
    />
 <h1 className='display-1 text-center my-1'>{containChoice.foodname}</h1>

<Container>
<Row className=' my-3 shadow-lg p-4 bg-white border border-5 border-dark'>
      <Col className="col-md-2">
      <img width="auto" height="100"
      className=" float-end border border-5 border-dark "
      src="https://th.bing.com/th/id/R.46c2726825537e028da5d4cc13a1d897?rik=vaSJxALonWee5g&pid=ImgRaw&r=0"
      alt="First slide"
    />
      </Col>
      <Col className='my-auto'>
        <h1>Item</h1>
        <p>{}</p>
      </Col>

      <Col className="my-auto col-md-1">
      <h4>QTY</h4>
      </Col>

      <Col className="my-auto col-md-1">
      <h4>Price</h4>
      </Col>

      <Col className="my-auto col-md-1">
      <Button variant="warning" >Select</Button>
      </Col>
    </Row>
</Container>

</Container>
)

}

export default Choice;