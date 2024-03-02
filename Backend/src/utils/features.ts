import mongoose from "mongoose";   

export const connectDB = async () => {
    mongoose.connect("mongodb+srv://new1:zTo7Qvl5S7msDSiO@olumsx-test.bddt8lm.mongodb.net/?retryWrites=true&w=majority&appName=OLumsX-Test", {
        dbName: "OLumsX",
    }).then((conn) => {
        console.log(`Connected MongoDB to ${conn.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })
}; 