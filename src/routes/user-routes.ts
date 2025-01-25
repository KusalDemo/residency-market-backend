import express from 'express';
import {registerUser} from "../database/user-data-store";
import {User} from "../models/User";

let userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    try{
        const user: User = req.body;
        let response = await registerUser(user);
        res.send(`User logged in successfully : ${response}`);
    }catch (error){
        console.error(`Error occurred: ${error}`);
        res.status(500).send(`${error}`);
    }
})


export default userRouter;

