import Vehicle from '../../modules/vehicle/model/Vehicle.js'


export async function createInitialData(){
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