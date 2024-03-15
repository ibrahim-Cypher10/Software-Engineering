import express from "express";
import { newUser, loginUser , updateUser, deleteUser, getUserDetails} from "../controllers/user.js";
const app = express.Router();

// Route to Signup page
app.post("/api/signup", newUser);

// Route to login page
app.post("/api/login", loginUser);

// Route to update user API
app.put('/api/updateuser', updateUser);

// API to delete user by ID
app.delete('/api/deleteuser', deleteUser);

// Finding user details by ID
app.get('/api/getuserbyid', getUserDetails);

export default app;
