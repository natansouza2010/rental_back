import RentalService from "../service/RentalService.js"

class RentalController {
    async createRental(req,res){
        let order = await RentalService.createRental(req);
        return res.status(200).json(order);
    }



}


export default new RentalController();