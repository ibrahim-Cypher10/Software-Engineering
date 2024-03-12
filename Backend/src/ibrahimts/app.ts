import express from "express";

import userRoute from './ibrahimts/routes/user.js';
import { connectDB } from "./ibrahimts/utils/features.js";
import { errorMiddleware } from "./ibrahimts/middlewares/error.js";

const port = 4000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoute)

app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {

    console.log(`Server is working on http://localhost:${port}`)

})