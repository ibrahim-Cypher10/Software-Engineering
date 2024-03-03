import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerProductPage from './pages/customerProductPage';

const Home = lazy(() => import('./pages/home'));
const Cart = lazy(() => import('./pages/cart'));
const Search = lazy(() => import('./pages/search'));

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> Include the Navbar component here */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<CustomerProductPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
