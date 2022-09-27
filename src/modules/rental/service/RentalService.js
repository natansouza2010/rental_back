import VehicleService from "../../vehicle/service/VehicleService.js"; 
import UserService from "../../user/service/UserService.js";
import RentalRepository from '../repository/RentalRepository.js'
import RentalException from "../exception/RentalException.js";
import { BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from "../../../config/httpStatus.js";

class RentalService{
    async createRental(req){
        try{
            let rentalData = req.body;
            this.validateRentalData(rentalData)
            this.validateVehicleData(rentalData.vehicle)
            this.validatePeriod(rentalData.period)
            let vehicleAvailable = await this.validateStatusVehicle(rentalData.vehicle);
            const { authUser } = req;
            const {authorization} = req.headers;
            let order = this.createRentalOrder(authUser,vehicleAvailable, rentalData.period);
            return order;

        }catch(err){
            console.log(err);
        }
    }


    createRentalOrder(authUser, vehicle, period){
        console.log("veiculo vindo ", vehicle)
        return {
            user: authUser,
            vehicle: vehicle,
            period: period,
            valuePayment: this.calculateValuePayment(vehicle.value, period)



        }
        

    }

    calculateValuePayment(value, period){
        return value * period
    }

    validatePeriod(period){
        if(!period){
            throw new RentalException(BAD_REQUEST, "The period not informed !")
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

    async validateStatusVehicle(vehicle){
        if(!vehicle){
            throw new RentalException(BAD_REQUEST, "The vehicle must be informed")
        }
        const {existingVehicle} = await VehicleService.validateStatusVehicle(vehicle)
        return existingVehicle
        
       
    }

}

export default new RentalService();