import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
// Theme
import { themeSettings } from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login";
import Signup from "./components/signup.js";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import ChatCustomer from "./pages/ChatCustomer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faGear, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faUser, faCartShopping, faGear, faMagnifyingGlass);

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>

function App() {
  // Dark/Light mode
  const mode = useSelector((state) => state.global.mode);
  // theme setting
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ChatCustomer />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
