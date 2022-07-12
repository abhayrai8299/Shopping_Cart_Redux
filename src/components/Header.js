import React,{useState} from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { IoMdCart} from 'react-icons/io'
import {GrFormClose} from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux'

const Header = () => {

 const getdata=useSelector((state)=>state.cartreducer)

  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3" >Home</NavLink>|
            <NavLink to="/" className="text-decoration-none text-light">Add to Cart</NavLink>
          </Nav>
      
          <IoMdCart  color='white' fontSize='25px' cursor='pointer'/>
          <Badge id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>4</Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className='card_details d-flex justify-content-center align-items-center'>
       <GrFormClose onClick={handleClose} style={{position:"absolute",top:2,right:2,ontSize:23,cursor:"pointer"}}/>
        <p>Your Cart is Empty!</p>
       </div>
      </Menu>
      </Navbar>
  </>
  )
}

export default Header