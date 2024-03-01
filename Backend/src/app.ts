import express from "express";

import userRoute from './routes/user.js';

const port = 4000;
const app = express();

app.use("/api/v1/user", userRoute)

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {

    console.log(`Server is working on http://localhost:${port}`)

})