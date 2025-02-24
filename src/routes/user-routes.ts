import express from 'express';
import {loginUser, registerUser, updateUser} from "../database/user-data-store";
import {User} from "../models/User";
import jwt, {Secret} from "jsonwebtoken";
import {generateToken, verifyToken} from "../util/jwt";
import dotenv from "dotenv";

dotenv.config();
let userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    try{
        const user: User = req.body;
        let response = await registerUser(user);
        res.send(`User logged in successfully : ${response}`);
    }catch (error){
        console.error(`Error occurred: ${error}`);
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

userRouter.post("/login",async (req, res) => {
    try{
        const user = req.body;
        let response = await loginUser(user);
        if(response){
            const { accessToken, refreshToken } =await generateToken(response.email);
            res.status(200).json({ user: response, accessToken: accessToken, refreshToken: refreshToken });
        }else{
            res.status(401).send("Invalid email or password");
        }
    }catch (error){
        console.error(`Error occurred: ${error}`);
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

userRouter.put("/update/:id", async (req, res) => {
    try{
        const userEmail = req.params.id;
        let user:User = req.body;
        let updatedUser = await updateUser(userEmail,user);
        res.status(204).send(updatedUser);
    }catch (error){
        console.error(`Error occurred: ${error}`);
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})


export async function authenticateToken(req : express.Request, res : express.Response, next : express.NextFunction){
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if(!token)res.status(401).send('No token provided');

    try{
        const payload = await verifyToken(token as string);
        if(payload){
            next();
        }else{
            res.status(403).send('Invalid or expired token');
        }
    }catch(err){
        res.status(401).send(err);
    }
}



export default userRouter;

