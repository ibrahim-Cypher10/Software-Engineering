import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faGear, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home';
// import LoginPage1 from './components/LoginPage11';
import LoginPage from './components/LoginPage1';

library.add(fab, faHeart, faUser, faCartShopping, faGear, faMagnifyingGlass)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
