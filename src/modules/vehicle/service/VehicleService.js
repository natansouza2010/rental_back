import VehicleException from '../exception/VehicleException.js'
import {BAD_REQUEST, SUCESS, INTERNAL_SERVER_ERROR} from '../../../config/httpStatus.js';
import VehicleRepository from '../repository/VehicleRepository.js';

class VehicleService {

    async createVehicle(req){
        try{
            let vehicleData = req.body;
        //PEGAR TOKEN
        validateVehicleData(vehicleData);
        let vehicle = createInitialVehicle(vehicleData);
        let createdVehicle = await VehicleRepository.save(vehicle);
        let response = {
            status: SUCESS,
            createdVehicle,
        }
        return response
        }catch(err){
            return {
                status: err.status ? err.status : INTERNAL_SERVER_ERROR,
                message: err.message,

            }
        }
    }


    async findById(req) {
        try{
            const { id } = req.params;
            this.validateInformedId(id);
            const existingVehicle = await VehicleRepository.findById(id);
            if(!existingVehicle){
                throw new VehicleException(BAD_REQUEST, "The vehicle was not found.")
            }

            let response = {
                status: SUCESS,
                existingVehicle,
            }
            return response;
        }catch(err){
            return{
                status: err.status ? err.status : INTERNAL_SERVER_ERROR,
                message: err.message,
            }
        }
    }

    async deleteVehicle(req) {
        try{
            const { id } = req.params;
            this.validateInformedId(id);
            const existingVehicle = await VehicleRepository.deleteById(id);
            if(!existingVehicle){
                throw new VehicleException(BAD_REQUEST, "The vehicle was not found.")
            }

            let response = {
                status: SUCESS,
                existingVehicle,
            }
            return response;
        }catch(err){
            return{
                status: err.status ? err.status : INTERNAL_SERVER_ERROR,
                message: err.message,
            }
        }
    }

    async findAll() {
        try{
            const vehicles = await VehicleRepository.findAll();
            if(!vehicles) {
                throw new VehicleException(BAD_REQUEST, "No vehicles were found.")
            }
            let response = {
                status: SUCESS,
                vehicles,
              };
            
            return response;

        }catch(err){
            return{
                status: err.status ? err.status : INTERNAL_SERVER_ERROR,
                message: err.message,
            }
        }
    }

    validateInformedId(id){
        if(!id){
            throw new VehicleException(BAD_REQUEST, "The vehicle ID must be informed.");
        }
    }

    createInitialVehicle(vehicleData){
        return {
            name: vehicleData.name,
            brand: vehicleData.brand,
            year: vehicleData.year,
            value: vehicleData.value,
            createdAt: new Date(),
        }
    }

    validateVehicleData(data){
        if(!data){
            throw new VehicleException(BAD_REQUEST, 'The vehicle data is not informed')
        }
    }
}

export default new VehicleService();





