import express from "express";

const app = express();
const env = process.env;

const PORT = env.port || 8082;



app.get("/api/status", (req,res)=>{
    return res.status(200).json({
        service: "CarRental",
        status: "up",
        httpStatus: 200,
    })
})

app.listen(PORT, ()=> {
    console.info(`Server started sucessfully at port ${PORT}`)
})