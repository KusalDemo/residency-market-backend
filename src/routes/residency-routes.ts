import express from 'express';


const residencyRouter = express.Router();

residencyRouter.post('/create', async (req, res) => {
    try{
        console.log("Create residency triggered..")
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