import express from 'express';
import {
    createResidency,
    getResidencies,
    getResidenciesByUserId,
    getResidencyById
} from "../database/residency-data-store";
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

residencyRouter.get('/', async (req, res) => {
    try{
        const residencies = await getResidencies();
        res.send(residencies);
    }catch (error){
        res.status(500).send(error);
    }
})

residencyRouter.get('/get/:id', async (req, res) => {
    try {
        const residencyId = req.params.id;
        const fetchedResidency = await getResidencyById(residencyId);
        res.send(fetchedResidency);
    } catch (error) {
        res.status(500).send(error);
    }
})

residencyRouter.get('/getOwns/:id', async (req, res) => {
    try{
        const residencyOwnerId = req.params.id;
        const residencies = await getResidenciesByUserId(residencyOwnerId);
        res.send(residencies);
    }catch (error){
        res.status(500).send(error);
    }
})

export default residencyRouter;