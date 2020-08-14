import React ,{useState} from 'react';
import {Modal ,Button,Spinner} from 'react-bootstrap';

const Favourite =(props)=>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="favourite">
        <Button className="heart-btn" onClick={handleShow}>
            <svg className="heart" viewBox="-1 -2 34 33">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" 
                stroke-width="2" />
            </svg>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
              <div className="header text-center">
                <Spinner animation="border" role="status"></Spinner>
                <span>
                <svg width="60" height="60" className="check">
                    <line fill="none" id="svg_1" stroke="#66a8a6" stroke-width="5" transform="rotate(-34.7186 10.457 35.115)" x1="10.45705" x2="10.45705" y1="24.60471" y2="45.62539"/>
                    <path d="m13.14288,42.96428l45.14286,-30.57143" fill="none" id="svg_2" stroke="#66a8a6" stroke-width="5"/>
                </svg>
                </span>
              </div>
                <h4>{props.itemName}</h4>
                <p>is added to wishlist !</p>
                <Button onClick={handleClose}>ok</Button>
          </Modal.Body>
        </Modal>
      </div>
    );

}
export default Favourite;
   
  