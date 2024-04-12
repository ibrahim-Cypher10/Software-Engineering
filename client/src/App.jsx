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
import CustomerHome from "./components/Customer/customerHome";
import VendorHome from "./components/Vendor/vendorHome.js";
// import ManagerHome from "./components/Manager/managerHome.js";
import CustomerProductPage from "./components/Customer/customerProductPage.js";
import VendorAddProduct from "./components/Vendor/vendorAddProduct.js";
import VendorDeleteProduct from "./components/Vendor/vendorDeleteProduct";
import Cart from "./components/Customer/cart";
// import ManagerViewCustomers from "./components/Manager/managerViewCustomers";
// import ManagerViewVendors from "./components/Manager/managerViewVendors";
// import CustomerAllOrdersPage from "./components/Customer/customerAllOrdersPage";
import Profile from "./components/profile";
// import UndeliveredOrders from "./components/Manager/undeliveredOrders";
// import DeliveredOrders from "./components/Manager/deliveredOrders";
// import ManagerViewManager from "./components/Manager/managerViewManager";
import VendorViewOrders from "./components/Vendor/vendorViewOrders";
// import Manager from "./Manager"
import Home from "./pages/Home";
// import Cart from "./components/cart";
import Wishlist from "./components/wishlist";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faGear, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Admin, Breakdown, Customers, Daily, Dashboard, Monthly, Overview, Performance, Products, Transactions  } from "./scenes";
import PaidAdvertisements from "./scenes/PaidAdvertisements/index";
// import {PaidAdvertisements} from "./scenes/advertisements/adv";
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
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />


          <Route path="/profile" element={<Profile />} />
          <Route path="/customerHome" element={<CustomerHome />} />
          <Route path="/vendorHome" element={<VendorHome />} />
          <Route path="/customerProductPage" element={<CustomerProductPage />} />
          <Route path="/vendorAddProduct" element={<VendorAddProduct />} />
          <Route path="/vendorDeleteProduct" element={<VendorDeleteProduct />} />
          <Route path="/cart" element={<Cart />} />

          {/* <Route path="/undeliveredOrders" element={<UndeliveredOrders />} /> */}
          <Route path="/vendorViewOrder" element={<VendorViewOrders />} />
          {/* <Route path="/deliveredOrders" element={<DeliveredOrders />} /> */}
          {/* <Route path="/" element={<DeliveredOrders />} /> */}
          {/* <Route path="/manager" element={<Manager/>} /> */}
          {/* </Routes> */}
          {/* <ThemeProvider theme={theme}> */}
          {/* <CssBaseline /> */}
          {/* <Routes> */}
          <Route>
            <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/adv" element={<PaidAdvertisements/>} /> */}
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/PaidAdvertisements" element={<PaidAdvertisements />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/performance" element={<Performance />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
