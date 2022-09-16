import mongoose from "mongoose";
import {MONGO_DB_URL} from "../secrets.js"


export function connectMongoDb(){
    mongoose.connect(MONGO_DB_URL, {
        useNewUrlParser: true,
        serverSelectionTimeoutMS: 180000,
    })

    mongoose.connection.on('connected', function(){
        console.log('The application connected to mongoDB successfully!')
    });
    mongoose.connection.on('error', function(){
        console.log('The application connected to mongoDB failed')
    });
}