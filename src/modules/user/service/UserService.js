import UserRepository from "../repository/UserRepository.js";
import * as httpStatus from "../../../config/httpStatus.js"
import * as secrets from "../../../config/secrets.js"

import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

class UserService {


    async findByEmail(req){
        try{
            const {email} = req.params;
            const {authUser} = req;
            this.validateRequestData(email)
            let user = await UserRepository.findByEmail(email)
            this.validateUserNotFound(user)
            this.validateAuthenticateUser(user, authUser)


            return {
                status: httpStatus.SUCESS,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            }
        }catch(err){
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,

            }
        }
    }


    validateRequestData(email){
        if(!email){
            throw new UserException(httpStatus.BAD_REQUEST, 'User email was not informed');
        }
    }

    validateUserNotFound(user){
        if(!user){
            throw new UserException(httpStatus.BAD_REQUEST, 'User not found !')
        }
    }

    validateAuthenticateUser(user, authUser){
        if(!authUser || user.id !== authUser.id ){
            throw new UserException(httpStatus.FORBIDDEN, 'You cannot see this user data')
        }
    }

    validateAccessTokenData(email, password){
        if(!email || !password){
            throw new UserException(httpStatus.UNAUTHORIZED, 'Email and password must be informed.')
        }

    }


    async getAcessToken(req){
        try{
            const {email, password} = req.body;
            this.validateAccessTokenData(email, password)
            let user = await UserRepository.findByEmail(email)
            this.validateUserNotFound(user);
            await this.validatePassword(password, user.password)
            const authUser = {id : user.id , name: user.name, email : user.email, role: user.role}
            const accessToken = jwt.sign({authUser}, secrets.API_SECRET ,{expiresIn: '1d'})
            console.log(accessToken)
            let response = {
                
                status: httpStatus.SUCESS, 
                accessToken: accessToken,
                
            }

            return response;
        }catch(err){
            return {
                status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: err.message,

            }
        }
    }


    async validatePassword(password, hashPassword){
        if(!await bcrypt.compare(password, hashPassword)){
            throw new UserException(httpStatus.UNAUTHORIZED, "Password doesn't match.")
        }
    }
}


export default new UserService();