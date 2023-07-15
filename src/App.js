import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import LoginPage from './components/login/login';
import ProductDetailPage from './components/ProductPage/ProductDetail';
import Sidebar from './components/Admin/Sidebar';
import Dashboard from './components/Admin/Dashboard';
import ProductList from "./components/Admin/ProductList";
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
{/* <Route exact path="/admin/dashboard" component={Dashboard} />
<Route exact path="/admin/products" element={<ProductList/>} /> */}
{/* <Route exact path="/admin/product" component={NewProduct} />
<Route exact path="/admin/product/:id" component={UpdateProduct} /> */}
{/* <Route exact path="/admin/orders" component={OrderList} /> */}
{/* <Route exact path="/admin/order/:id" component={ProcessOrder} />
<Route exact path="/admin/users" component={UsersList} />
<Route exact path="/admin/user/:id" component={UpdateUser} />
<Route exact path="/admin/reviews" component={ProductReviews} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
