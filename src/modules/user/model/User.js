import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;


const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        } ,
        email: {
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        
    }
)

export default model("User", UserSchema);