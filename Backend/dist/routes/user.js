import express from "express";
import { newUser, loginUser , updateUser, deleteUser, getUserDetails} from "../controllers/user.js";
const app = express.Router();
app.post("/signup", newUser);
app.post("/login", loginUser);
app.put('/updateuser', updateUser);
app.delete('/deleteuser', deleteUser);
app.get('/getuserbyid', getUserDetails);
export default app;
