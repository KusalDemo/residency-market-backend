import express from 'express';

let customerRouter = express.Router();

customerRouter.post("/login", async (req, res) => {
    try{
        res.send("User logged in successfully");
    }catch (error){
        console.error(`Error occurred: ${error}`);
        res.status(500).send(error);
    }
})

export default customerRouter;

