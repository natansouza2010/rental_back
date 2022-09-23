import VehicleService from "../../vehicle/service/VehicleService.js"; 
import UserService from "../../user/service/UserService.js";
import RentalException from "../exception/RentalException.js";
import { BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from "../../../config/httpStatus.js";

class RentalService{
    async createRental(req){
        try{
            let rentalData = req.body;
            this.validateRentalData(rentalData)
            this.validateVehicleData(rentalData.vehicle)
            let vehicleAvailable = this.validateStatusVehicle(req);
            const { authUser } = req;
            const {authorization} = req.headers;
            let order = {
                authUser, authorization, vehicleAvailable
            }
            return order;

        }catch(err){
            console.log(err);
        }
    }



    validateRentalData(rentalData){
        if(!rentalData){
            throw new RentalException(BAD_REQUEST, "The data rental must be informed")
        }
    }
    validateVehicleData(vehicle){
        if(!vehicle){
            throw new RentalException(BAD_REQUEST, "The vehicle rental must be informed")
        }
    }

    async validateStatusVehicle(req){
        if(!req){
            throw new RentalException(BAD_REQUEST, "The vehicle must be informed")
        }
        console.log(req)
        return { existingVehicle } = await VehicleService.validateStatusVehicle(req)
       
    }

}

export default new RentalService();