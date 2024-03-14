import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faGear, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home';
<<<<<<< Updated upstream
// import LoginPage1 from './components/LoginPage11';
import LoginPage from './components/LoginPage1';
=======
import Login from './pages/Login';
import SignUpForm from './pages/Signup';
import CartPage from './pages/cart';
import HomePage from './pages/Land';
import HomePage2 from './pages/HomePage2';
import ProductPage from './pages/Productpage';
>>>>>>> Stashed changes

library.add(fab, faHeart, faUser, faCartShopping, faGear, faMagnifyingGlass)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
        <Route path="/login" element={<LoginPage />} />
=======
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/land" element={<HomePage/>} />
        <Route path="/land2" element={<HomePage2/>} />
        <Route path = "/productpage" element={<ProductPage />} /> 
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
};

export default App;
