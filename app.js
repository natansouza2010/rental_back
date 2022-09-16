import express from "express";
import { createInitialData } from "./src/config/db/initialData.js";
import { connectMongoDb } from "./src/config/db/mongoDbConfig.js";
import vehicleRoutes from './src/modules/vehicle/routes/VehicleRoutes.js'

const app = express();
const env = process.env;

const PORT = env.port || 8082;

connectMongoDb();
createInitialData();

app.get("/api/status", (req,res)=>{
    return res.status(200).json({
        service: "CarRental",
        status: "up",
        httpStatus: 200,
    })
})

app.use(vehicleRoutes);



app.listen(PORT, ()=> {
    console.info(`Server started sucessfully at port ${PORT}`)
})