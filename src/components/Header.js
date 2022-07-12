import React, { useEffect, useState } from "react";
import { Badge, Container, Nav, Navbar, Table } from "react-bootstrap";
import { IoMdCart } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import {AiFillDelete} from "react-icons/ai"
import {REMOVE_CART} from "../redux/actions/action";
 
const Header = () => {

 const [price,setprice]=useState(0);
 console.log(price);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("cart", getdata);


  const dispatch=useDispatch();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const del=(id)=>{
    dispatch(REMOVE_CART(id))
  }

  const total=()=>{
    let price=0;
    getdata.map((ele)=>{
      price=ele.price *ele.qnty+price;
    });
   setprice(price);
  }

  useEffect(()=>{
    total()
  },[total])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">
              Home
            </NavLink>
            |
            <NavLink to="/" className="text-decoration-none text-light">
              Add to Cart
            </NavLink>
          </Nav>

          <IoMdCart color="white" fontSize="25px" cursor="pointer" />
          <Badge
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {getdata.length}
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((items) => {
                    return (
                      <>
                        <tr>
                          <td>
                           <NavLink to={`/cart/${items.id}`}onClick={handleClose}><img src={items.imgdata} alt="" style={{width:"5rem",height:"5rem"}} /></NavLink> 
                          </td>
                          <td>
                            <p>
                              {items.rname}
                            </p>
                            <p>
                              Price: Rs.{items.price}
                            </p>
                            <p>Quantity:{items.qnty}</p>
                            <p onClick={()=>del(items.id)} style={{cursor:"pointer"}}><AiFillDelete /></p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total: Rs.{price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card_details d-flex justify-content-center align-items-center">
              <GrFormClose
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  ontSize: 23,
                  cursor: "pointer",
                }}
              />
              <p>Your Cart is Empty!</p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
