import { Router } from "express";

import RentalController from "../controller/RentalController.js"

const router = new Router();


router.post('/api/rental/create', RentalController.createRental)


export default router;