import express from 'express';
import {loginUser, registerUser} from "../database/user-data-store";
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

userRouter.post("/login", async (req, res) => {
    try{
        const user = req.body;
        let response = await loginUser(user);
        res.send(response);
    }catch (error){
        console.error(`Error occurred: ${error}`);
        res.status(500).send(error);
    }
})

export default userRouter;

