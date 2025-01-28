import express from 'express';

const inquiryRouter = express.Router();

inquiryRouter.post('/create', async (req, res) => {
    try{
        console.log(`Received inquiry: ${JSON.stringify(req.body)}`);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})


export default inquiryRouter;