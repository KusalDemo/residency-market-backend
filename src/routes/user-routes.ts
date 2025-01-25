import express from 'express';
import {registerUser} from "../database/user-data-store";
import {IUser} from "../models/IUser";
import {User} from "../models/User";

let customerRouter = express.Router();

customerRouter.post("/login", async (req, res) => {
    try{
        const user: User = req.body;
        let response = await registerUser(user);
        res.send(`User logged in successfully : ${response}`);
    }catch (error){
        console.error(`Error occurred: ${error}`);
        res.status(500).send(error);
    }
})

export default customerRouter;

