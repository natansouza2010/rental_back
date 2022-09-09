import Vehicle from "../model/Vehicle.js";

class VehicleRepository{
    async save(vehicle){
        try{
            return await Vehicle.create(vehicle)

        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findById(id){
        try{
            return await Vehicle.findById(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async findAll(){
        try{
            return await Vehicle.find()
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async deleteById(id){
        try{
            return await Vehicle.findByIdAndDelete(id)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


}

export default new VehicleRepository();