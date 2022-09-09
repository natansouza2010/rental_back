import { Router } from "express";

import VehicleController from "../controller/VehicleController.js";

const router = new Router();


router.get('/api/vehicle/:id', VehicleController.findById)
router.delete('/api/vehicle/:id', VehicleController.deleteVehicle)
router.post('/api/vehicle/create', VehicleController.createVehicle);
router.get('/api/vehicles', VehicleController.findAll);


export default router;