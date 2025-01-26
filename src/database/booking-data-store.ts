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