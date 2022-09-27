import Rental from "../model/Rental.js";


class RentalRepository{
    async createRental(rental){
        try{
            return await Rental.create(rental)
        }catch(err){
            console.error(err.message);
            return null;
        }
    }


    async findRentalById(id){
        try{
            return await Rental.findById(id);
        }catch(err){
            console.error(err.message);
            return null;
        }
    }
}

export default new RentalRepository();