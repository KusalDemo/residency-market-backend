import express from 'express';
import {
    addInquiry,
    getInquiriesByResidencyId,
    getInquiriesByUserId,
    removeInquiry, updateInquiry
} from "../database/inquiry-data-store";
import {Inquiry} from "../models/Inquiry";

const inquiryRouter = express.Router();

inquiryRouter.post('/create', async (req, res) => {
    try{
        const inquiry:Inquiry = req.body;
        const savedInquiry = await addInquiry(inquiry);
        res.status(200).send(savedInquiry);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

inquiryRouter.get('/getUserInquiries/:userId', async (req, res) => {
    try{
        const userId:string = req.params.userId;
        const inquiries = await getInquiriesByUserId(userId);
        res.status(200).send(inquiries);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

inquiryRouter.get('/getResidencyInquiries/:residencyId', async (req, res) => {
    try{
        const residencyId:string = req.params.residencyId;
        let inquiries = await getInquiriesByResidencyId(residencyId);
        res.status(200).send(inquiries);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

inquiryRouter.delete('/delete/:id', async (req, res) => {
    try{
        const inquiryId = req.params.id;
        const userAndResidency = req.body;
        console.log(`userAndResidency: ${JSON.stringify(userAndResidency)} | inquiryId: ${inquiryId}`);
        await removeInquiry(inquiryId, userAndResidency.userId,userAndResidency.residencyId);
        res.status(200).send();
    }catch (error){
        console.log(`Error occurred: ${error}`);
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

inquiryRouter.put('/update/:id', async (req, res) => {
    try{
        const inquiryId = req.params.id;
        const inquiry = req.body;
        const updatedInquiry = await updateInquiry(inquiryId, inquiry);
        res.status(200).send(updatedInquiry);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})


export default inquiryRouter;