import express from "express";
import { createInitialData } from "./src/config/db/initialData.js";
import { connectMongoDb } from "./src/config/db/mongoDbConfig.js";
import vehicleRoutes from './src/modules/vehicle/routes/VehicleRoutes.js'
import UserRoutes from './src/modules/user/routes/UserRoutes.js';
import rentalRoutes from './src/modules/rental/routes/RentalRoutes.js'

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
app.use(express.json());
app.use(UserRoutes)
app.use(vehicleRoutes);
app.use(rentalRoutes);



app.listen(PORT, ()=> {
    console.info(`Server started sucessfully at port ${PORT}`)
})