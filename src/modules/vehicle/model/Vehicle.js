import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;


const VehicleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        } ,
        brand: {
            type: String,
            required: true,
        },
        year:{
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        createdAt: {
            type: Date,
            required:true,
        },

    }
)

export default model("Vehicle", VehicleSchema);