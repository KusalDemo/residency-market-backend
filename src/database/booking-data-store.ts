import {Booking} from "../models/Booking";
import IBooking from "../models/IBooking";
import {addResidencyBookings} from "./residency-data-store";

export const bookResidency = async (booking: Booking) => {
    try{
        const completedBooking = await IBooking.create(booking);
        await addResidencyBookings(booking.residency,completedBooking._id);
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

export const updateBooking = async (id:string, booking: Booking) => {
    try{
        await IBooking.updateOne({_id:id}, booking);
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const cancelBooking = async (id:string) => {
    try{
        let changedBooking = await IBooking.findByIdAndUpdate(id,{status:"cancelled"});
        return changedBooking;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}