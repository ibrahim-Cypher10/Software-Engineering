import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';

interface IUser extends Document {
    _id: string;
    name: string;
    password: string;
    email: string;
    role: "admin" | "user";
    gender: "male" | "female" | "prefer not to say";
    dob: Date;
    createdAt: Date;
    updatedAt: Date;
    // virtual attribute
    age: number;
    generateAuthToken: () => string;
}

const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please enter a unique ID"],
    },
    name: {
        type: String,
        required: [true, "What is your Name?"]
    },
    email: {
        type: String,
        unique: [true, "Email already in use"],
        required: [true, "Please enter your email"],
        validate: validator.default.isEmail,
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female", "prefer not to say"],
        required: [true, "Choose your Gender: "],
    },
    dob: {
        type: Date,
        required: [true, "Enter your Date of Birth"]
    }
},
    {
        timestamps: true,
    });

schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    };
    return age;
});

schema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, role: this.role }, 'yourSecretKey', { expiresIn: '1h' });
    return token;
};

export const User = mongoose.model<IUser>("User", schema);

