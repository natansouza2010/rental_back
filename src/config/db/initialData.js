import Vehicle from '../../modules/vehicle/model/Vehicle.js'
import bcrypt from "bcrypt";
import User from "../../modules/user/model/User.js";


export async function createInitialData(){

    try{
      
        let password = await bcrypt.hash("admin", 10);
        console.log(password)
        await User.create({
            name: "User Admin",
            email: "admin",
            password: password,
            role: "ADMIN",
        })

        await User.create({
            name: "User Test 2",
            email: "testeuser2@gmail.com",
            password: password,
            role: "USER",
          });
    }catch(err){
        console.log(err)
    }



    try{
        let existingData = await Vehicle.find();
        if(existingData && existingData.length > 0){
            console.log("Remove data existing...");
            await Vehicle.collection.drop();
        }

        await Vehicle.create({
            name: "Corsa",
            brand: "Fiat",
            year: "2014",
            value: 8000,
            createdAt: new Date(),
        });

        let initialData = await Vehicle.find();
        console.info(
            `Initial data was created: ${JSON.stringify(initialData, undefined, 4)}`
          );
    }catch(err){
        console.error(err);
    }


}