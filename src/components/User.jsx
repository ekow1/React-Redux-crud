import {Card , Button, Modal}from 'react-bootstrap';
import { useState } from 'react';
import EditUserForm from './EditUserForm';
import {  Col } from 'react-bootstrap';
import 'boxicons/css/boxicons.min.css';

function User( {userInfo, updateUser, deleteUser} ) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handleDelete = () => {
    deleteUser(userInfo.id);

    delete userInfo.id;
  
  }



  return (
    <div>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditUserForm
            userInfo={userInfo}
            updateUser={updateUser}
            handleClose = {handleClose}
           
          
          
          />


        </Modal.Body>

        </Modal>
        





<Col md={4} >

    <Card style={{ width: '18rem' , margin: '2rem'}}>
    <Card.Body>
      <Card.Title className="mb-4 ">
       NAME : {userInfo.name}

      </Card.Title>
      <Card.Title className="mb-4 ">
        CONTACT : {userInfo.contact}
      </Card.Title>
      <Card.Title  className="mb-3 ">
       LOCATION :  {userInfo.location}
       
        </Card.Title>
     
     
     
    </Card.Body>
    <Card.Footer className=' text-center bg-light' bg='dark'>
   
    <Button variant="outline-primary" className='me-2 ' onClick={handleShow}>    <i class="bx bxs-edit bx-flashing-hover bx-fw"></i>          Update</Button>
      <Button variant="outline-danger" onClick={handleDelete}> <i class="bx bxs-trash bx-flashing-hover bx-fw"></i>  Delete</Button>
    </Card.Footer>
   
  </Card>
    </Col>
    </div>


  )
}

export default User;