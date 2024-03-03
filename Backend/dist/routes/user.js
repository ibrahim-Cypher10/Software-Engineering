import express from "express";
import { newUser, loginUser , updateUser, deleteUser, getUserDetails} from "../controllers/user.js";
const app = express.Router();
app.post("/new", newUser);
app.post("/login", loginUser);
app.put('/user/:userId', updateUser);
app.delete('/user/:userId', deleteUser);
app.get('/user/:userId', getUserDetails);
export default app;
