import express from 'express';
import {addInquiry} from "../database/inquiry-data-store";
import {Inquiry} from "../models/Inquiry";

const inquiryRouter = express.Router();

inquiryRouter.post('/create', async (req, res) => {
    try{
        const inquiry:Inquiry = req.body;
        const savedInquiry = await addInquiry(inquiry);
        res.status(201).send(savedInquiry);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})


export default inquiryRouter;