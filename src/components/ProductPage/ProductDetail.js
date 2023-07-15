import React from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import './ProductDetailPage.css'; // Import your CSS file

const ProductDetailPage = () => {
  const product = {
    id: 1,
    title: 'Product 1',
    price: '$19.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, mauris a elementum tincidunt, ligula dui vestibulum odio, nec fringilla nulla mi a tellus.',
    image: 'https://images.unsplash.com/photo-1688627688237-b90915412815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  };

  const handleWhatsAppClick = () => {
    // Handle WhatsApp button click event
    // Add your logic here
  };

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.image} alt={product.title} className="img-fluid" />
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className="price">{product.price}</div>
        {/* Add any additional details or components */}
        <Button variant="success" className="whatsapp-button" onClick={handleWhatsAppClick}>
          <FaWhatsapp className="whatsapp-icon" />
          Contact via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
