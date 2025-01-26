import {Booking} from "../models/Booking";
import IBooking from "../models/IBooking";

export const bookResidency = async (booking: Booking) => {
    try{
        const completedBooking = await IBooking.create(booking);
        return completedBooking;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const getBookings = async (userId:string)=>{
    try{
        let allBookings = await IBooking.find({user: userId}).populate("user", "name email");
        return allBookings;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}