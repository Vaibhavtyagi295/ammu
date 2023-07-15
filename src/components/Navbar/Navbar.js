import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineContacts, AiOutlineLogin } from 'react-icons/ai';
import "./navbar.css";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch categories from backend API
    fetchCategories();

    // Fetch brands from backend API
    fetchBrands();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await fetch('/api/brands');
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error('Failed to fetch brands:', error);
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Amul</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Dropdown className="mr-2">
              <Dropdown.Toggle variant="outline-primary" id="category-dropdown">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((category) => (
                  <Dropdown.Item key={category.id} href={`#category${category.id}`}>
                    {category.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="brand-dropdown">
                Brand
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map((brand) => (
                  <Dropdown.Item key={brand.id} href={`#brand${brand.id}`}>
                    {brand.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center">
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </div>
          <Nav className="ml-auto">
            <Nav.Link href="#home"><AiOutlineHome />Home</Nav.Link>
            <Nav.Link href="#contact"><AiOutlineContacts />Contact</Nav.Link>
            <Nav.Link href="#login"><AiOutlineLogin /> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
