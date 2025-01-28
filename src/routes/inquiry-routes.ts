import express from 'express';
import {addInquiry, getInquiriesByResidencyId, getInquiriesByUserId} from "../database/inquiry-data-store";
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
});

inquiryRouter.get('/getUserInquiries/:userId', async (req, res) => {
    try{
        const userId:string = req.params.userId;
        const inquiries = await getInquiriesByUserId(userId);
        res.send(inquiries);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

inquiryRouter.get('/getResidencyInquiries/:residencyId', async (req, res) => {
    try{
        const residencyId:string = req.params.residencyId;
        let inquiries = await getInquiriesByResidencyId(residencyId);
        res.send(inquiries);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});


export default inquiryRouter;