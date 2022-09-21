import VehicleService from '../service/VehicleService.js'

class VehicleController {

    async createVehicle(req, res) {
        console.log(req)
        let vehicle = await VehicleService.createVehicle(req);
        return res.status(vehicle.status).json(vehicle);
    }


    async findById(req, res) {
        let vehicle = await VehicleService.findById(req);
        return res.status(vehicle.status).json(vehicle);
    }
    async findAll(req, res) {
        let vehicle = await VehicleService.findAll();
        return res.status(vehicle.status).json(vehicle);
    }

    async deleteVehicle(req,res){
        let vehicle = await VehicleService.deleteVehicle(req);
        return res.status(vehicle.status).json(vehicle);
    }
}

export default new VehicleController();