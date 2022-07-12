import React from "react";
import { Table } from "react-bootstrap";
import "./style.css";

const CardsDetails = () => {
  return (
    <>
      <div className="container mt-2 ">
        <h2 className="text-center">Items Details Page</h2>
     
        <section className="container mt-3 d-flex">
          <div className="itemsdetails">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt="google"
              ></img>
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong>:Masala Theory
                    </p>
                    <p>
                      <strong>Price</strong>:Rs.300
                    </p>
                    <p>
                      <strong>Dishes</strong>:Biryani
                    </p>
                    <p>
                      <strong>Total</strong>:Rs.300
                    </p>
                  </td>
                  <td>
                    <p><strong>Ratings</strong></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
