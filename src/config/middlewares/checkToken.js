import jwt from "jsonwebtoken";
import UserException from "../../modules/user/exception/UserException.js";
import {promisify} from "util"
import * as httpStatus from '../httpStatus.js';
const emptySpace = " ";

export default async(req, res, next) => {
    try{
        let { authorization } = req.headers;

        if(!authorization){
            throw new UserException(httpStatus.UNAUTHORIZED, "Token de acesso was not informed.")
        }
        let accessToken = authorization;
        if(accessToken.includes(emptySpace)){
            accessToken = accessToken.split(emptySpace)[1];
        }else{
            accessToken = authorization;
        }
        const decoded = await promisify(jwt.verify)(accessToken, "keeeey")
        req.authUser = decoded.authUser;
        return next();

    }catch(err){
        const status = err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR;
        return res.status(status).json({status, message: err.message});
    }
}