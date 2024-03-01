import mongoose from "mongoose";   

export const connectDB = async () => {
    mongoose.connect("mongodb+srv://user_1:OlumsX:2024@olumsx-test.bddt8lm.mongodb.net/?retryWrites=true&w=majority&appName=OLumsX-Test", {
        dbName: "OLumsX",
    }).then((conn) => {
        console.log(`Connected MongoDB to ${conn.Connection.host}`);
    }).catch((err) => {
        console.log(err);
    })
};