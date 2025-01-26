import express from 'express';
import {
    createResidency, deleteResidency,
    getResidencies,
    getResidenciesByUserId,
    getResidencyById, updateResidency
} from "../database/residency-data-store";
import {Residency} from "../models/Residency";


const residencyRouter = express.Router();

residencyRouter.post('/create', async (req, res) => {
    try{
        const residencyToCreate: Residency = req.body;
        const residencyPromise = await createResidency(residencyToCreate);
        if (residencyPromise) {
            res.status(201).send(residencyPromise);
        }else{
            res.status(400).send("Residency not created");
        }
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

residencyRouter.put('/update/:id', async (req, res) => {
    try{
        const residencyId:string = req.params.id;
        const residency:Residency = req.body;
        const updatedResidency = await updateResidency(residencyId, residency);
        res.status(204).send();
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

residencyRouter.delete('/delete/:id', async (req, res) => {
    try{
        const residencyId:string = req.params.id;
        const deletedResidency = await deleteResidency(residencyId);
        res.status(204).send();
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

residencyRouter.get('/', async (req, res) => {
    try{
        const residencies = await getResidencies();
        res.send(residencies);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

residencyRouter.get('/get/:id', async (req, res) => {
    try {
        const residencyId:string = req.params.id;
        const fetchedResidency = await getResidencyById(residencyId);
        res.send(fetchedResidency);
    } catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

residencyRouter.get('/getOwns/:id', async (req, res) => {
    try{
        const residencyOwnerId:string = req.params.id;
        const residencies = await getResidenciesByUserId(residencyOwnerId);
        res.send(residencies);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})


export default residencyRouter;