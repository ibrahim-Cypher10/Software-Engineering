import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import bcrypt from 'bcrypt';
export const newUser = TryCatch(async (req, res, next) => {
    const { name, email, password, gender, _id, dob } = req.body;
    const user = await User.create({
        username,
        email,
        password,
        user,
        _id,
        dob: new Date(dob),
    });
    return res.status(200).json({
        success: true,
        message: `Welcome, ${user.name}`
    });
});
export const loginUser = TryCatch(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    console.log("here");
    const user = await User.findOne({ email });
    console.log(`Checking ${user}`);
    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Authentication failed. User not found."
        });
    }
    console.log(user.password);
    console.log(password);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("here---");
    console.log(isMatch);
    if (!isMatch) {
        return res.status(401).json({
            success: false,
            message: "Authentication failed. Wrong password."
        });
    }
    const token = user.generateAuthToken();
    return res.status(200).json({
        success: true,
        token,
        message: "Login successful"
    });
});

export const updateUser = TryCatch(async (req, res, next) => {
    const { userId } = req.params;
    const updateData = req.body;
    if (updateData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(updateData.password, salt);
    }
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found."
        });
    }
    return res.status(200).json({
        success: true,
        message: "User updated successfully.",
        user,
    });
});
export const deleteUser = TryCatch(async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found."
        });
    }
    return res.status(200).json({
        success: true,
        message: "User deleted successfully."
    });
});

export const getUserDetails = TryCatch(async (req, res, next) => {
    const userId = req.params._id; // Or req.params.id, depending on how you've named the parameter in your route

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found."
        });
    }

    // Exclude password and any other sensitive info from the result
    const { password, ...userDetails } = user.toObject();

    return res.status(200).json({
        success: true,
        user: userDetails
    });
});