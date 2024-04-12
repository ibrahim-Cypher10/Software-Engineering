import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// Rate Limiter
import { rateLimiter } from "./middlewares/rateLimiter.js";

// Routes imports
import advertisementRoutes from './routes/advertisement.js';
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// Data imports

// ******************************************************
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import Advertisement from "./models/Advertisement.js";
import {
  advertisements,
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";
// ******************************************************


// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(rateLimiter);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes Setup
// Import routes

// Use routes
app.use('/advertisements', advertisementRoutes);
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// Mongoose Setup
const PORT = 9000;
mongoose
  .connect("mongodb+srv://Ibrahim:Ibrahim12345@cluster0.knl6iui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    initializeDatabase();
    // initializeDatabaseAdvertisements();

  })
  .catch((error) => console.log(`${error} did not connect.`));

function initializeDatabase() {
  // initializeDatabaseUser();
  // initializeDatabaseProduct();
  // initializeDatabaseProductStat();
  // initializeDatabaseTransaction();
  // initializeDatabaseOverallStat();
  // initializeDatabaseAffiliateStat();
  initializeDatabaseAdvertisements();
}

function initializeDatabaseAdvertisements() {
  Advertisement.countDocuments().then(count => {
    if (count === 0) {
      console.log('Initializing advertisements...');
      console.log(advertisements);
      Advertisement.insertMany(advertisements)
        .then(() => console.log('Ads data initialized.'))
        .catch(err => console.error('Failed to initialize user data:', err));
    }
  });
}

function initializeDatabaseUser() {
  User.countDocuments().then(count => {
    if (count === 0) {
      User.insertMany(dataUser)
        .then(() => console.log('User data initialized.'))
        .catch(err => console.error('Failed to initialize user data:', err));
    }
  });
}

function initializeDatabaseProduct() {
  Product.countDocuments().then(count => {
    if (count === 0) {
      Product.insertMany(dataProduct)
        .then(() => console.log('Product data initialized.'))
        .catch(err => console.error('Failed to initialize product data:', err));
    }
  });
}

function initializeDatabaseProductStat() {
  ProductStat.countDocuments().then(count => {
    if (count === 0) {
      ProductStat.insertMany(dataProductStat)
        .then(() => console.log('ProductStat data initialized.'))
        .catch(err => console.error('Failed to initialize product stat data:', err));
    }
  });
}

function initializeDatabaseTransaction() {
  Transaction.countDocuments().then(count => {
    if (count === 0) {
      Transaction.insertMany(dataTransaction)
        .then(() => console.log('Transaction data initialized.'))
        .catch(err => console.error('Failed to initialize transaction data:', err));
    }
  });
}

function initializeDatabaseOverallStat() {
  OverallStat.countDocuments().then(count => {
    if (count === 0) {
      OverallStat.insertMany(dataOverallStat)
        .then(() => console.log('OverallStat data initialized.'))
        .catch(err => console.error('Failed to initialize overall stat data:', err));
    }
  });
}

function initializeDatabaseAffiliateStat() {
  AffiliateStat.countDocuments().then(count => {
    if (count === 0) {
      AffiliateStat.insertMany(dataAffiliateStat)
        .then(() => console.log('AffiliateStat data initialized.'))
        .catch(err => console.error('Failed to initialize affiliate stat data:', err));
    }
  });
}

