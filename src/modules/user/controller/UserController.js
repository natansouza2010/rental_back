import UserService from "../service/UserService.js";

class UserController {
    async findByEmail(req,res){
        let user = await UserService.findByEmail(req);
        return res.status(user.status).json(user);
    }

    async getAcessToken(req,res){
        let accessToken = await UserService.getAcessToken(req);
        return res.status(accessToken.status).json(accessToken);
    }


}


export default new UserController();