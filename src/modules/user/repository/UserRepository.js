import User from "../model/User.js";

class UserRepository{

    async findByEmail(email){
        try{
            return await User.findOne({email: email})
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

}

export default new UserRepository();