import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBIcon } from "mdb-react-ui-kit";

import Sidebar from "./side";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        <MDBCol md="3">
          <Sidebar /> {/* Include the Sidebar component here */}
        </MDBCol>
        <MDBCol md="9">
          <MDBRow>
            {products.map((product) => (
              <MDBCol key={product.id} md="6" lg="4" className="mb-4">
                <MDBCard>
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Today's Combo Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <p className="text-white mb-0 small">x{product.quantity}</p>
                    </div>
                  </div>
                  <MDBCardImage src={product.image} position="top" alt={product.name} />
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          {product.category}
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>${product.originalPrice}</s>
                      </p>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{product.name}</h5>
                      <h5 className="text-dark mb-0">${product.price}</h5>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">{product.available}</span>
                      </p>
                      <div className="ms-auto text-warning">
                        {[...Array(product.rating)].map((_, index) => (
                          <MDBIcon key={index} fas icon="star" />
                        ))}
                        {typeof product.rating === "number" &&
                          [...Array(Math.max(5 - product.rating, 0))].map((_, index) => (
                            <MDBIcon key={index} far icon="star" />
                          ))}
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
