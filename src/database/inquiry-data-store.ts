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

