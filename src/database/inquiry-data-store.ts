import {Inquiry} from "../models/Inquiry";
import IInquiry from "../models/IInquiry";
import {addResidencyInquiries} from "./residency-data-store";

export const addInquiry = async (inquiry: Inquiry) => {
    try{
        const savedInquiry = await IInquiry.create(inquiry);
        if (savedInquiry) {
            await addResidencyInquiries(inquiry.residency,savedInquiry._id);
            return savedInquiry;
        }else{
            throw new Error(`Inquiry not saved`);
        }
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const getInquiriesByUserId = async (id:string) => {
    try{
        const inquiries = await IInquiry.find({user: id}).populate("user", "name email").populate("residency", "title location");
        return inquiries;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const getInquiriesByResidencyId = async (id:string) => {
    try{
        const inquiries = await IInquiry.find({residency: id}).populate("user", "name email");
        return inquiries;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}