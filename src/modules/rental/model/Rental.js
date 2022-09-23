import mongoose from "mongoose";


const Schema = mongoose.Schema;
const model = mongoose.model;


const RentalSchema = new Schema(
    {
        user: {
            type: Object,
            required: true,
        } ,
        vehicle: {
            type: Object,
            required: true,
        },
        period: {
            type: Number,
            required: true,
        
        },
        valuePayment: {
            type: Number,
            required: true

        }
        
    }
)

export default model("Rental", RentalSchema);