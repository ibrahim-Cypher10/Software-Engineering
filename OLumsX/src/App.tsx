import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/home'
// import Cart from './pages/cart'
// import Search from './pages/search'
import { Suspense, lazy } from 'react'
const Home = lazy(() => import('./pages/home'));
const Cart = lazy(() => import('./pages/cart'));
const Search = lazy(() => import('./pages/search'));


const App = () => {
  return <Router>
    {/* Header */}
    <Suspense fallback={<Loader />> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  </Router>
  <Suspense />
}

export default App