import express from "express";

import userRoute from './routes/user.js';
import { connectDB } from "./utils/features.js";

const port = 4000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoute)

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {

    console.log(`Server is working on http://localhost:${port}`)

})