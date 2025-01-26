import express from 'express';
import {createResidency} from "../database/residency-data-store";
import {Residency} from "../models/Residency";


const residencyRouter = express.Router();

residencyRouter.post('/create', async (req, res) => {
    try{
        const residencyToCreate: Residency = req.body;
        const residencyPromise = await createResidency(residencyToCreate);
        if (residencyPromise) {
            res.send(residencyPromise);
        }else{
            res.status(400).send("Residency not created");
        }
    }catch (error){
        res.status(500).send(error);
    }
})

residencyRouter.put('/update/:id', async (req, res) => {
    try{

    }catch (error){
        res.status(500).send(error);
    }
})

residencyRouter.delete('/delete/:id', async (req, res) => {
    try{

    }catch (error){
        res.status(500).send(error);
    }
})

residencyRouter.get('/get', async (req, res) => {
    try{

    }catch (error){
        res.status(500).send(error);
    }
})

residencyRouter.get('/get/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error);
    }
})


export default residencyRouter;