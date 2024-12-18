import mongoose from "mongoose"


export const dbConnection = () => {
    mongoose.connect(process.env.Mongo_URI, {
        dbName: "Tech_Courses",
    }).then(() => {
        console.log("Successfully Connected to database!..........");
    }).catch(err => {
        console.log(`Error occur while connecting to database ${err}`);
    })
}