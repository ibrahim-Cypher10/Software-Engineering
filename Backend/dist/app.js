import express from "express";
import userRoute from './routes/user.js';
import productRoute from './routes/product.js';
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
// setting port to 4000
const port = 4000;
//connect to MongoDB
connectDB();
const app = express();
app.use(express.json());
// User api routing
app.use("/api/v1/user", userRoute);
// Product api routing
app.use("/api/v1/product", productRoute);
app.use(errorMiddleware);
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});
