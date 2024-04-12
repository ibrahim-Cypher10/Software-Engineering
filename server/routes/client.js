import express from "express";

import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  // advertisements
} from "../controllers/client.js";

const router = express.Router();

// Routes
router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);
// router.get("advertisement", advertisements.js)

export default router;
