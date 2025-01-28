import {Inquiry} from "../models/Inquiry";
import IInquiry from "../models/IInquiry";

export const addInquiry = async (inquiry: Inquiry) => {
    try{
        const savedInquiry = await IInquiry.create(inquiry);
        if (!savedInquiry) {
            throw new Error(`Inquiry not saved`);
        }
        return savedInquiry;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

