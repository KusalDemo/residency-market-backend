import mongoose, {Schema, Document} from 'mongoose';

export interface IBooking extends Document{
    residency: mongoose.Schema.Types.ObjectId,
    user: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    endDate: Date,
    total: number,
    status: string
}

let BookingSchema = new Schema({
    residency: {type: mongoose.Schema.Types.ObjectId, ref: 'Residency', required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    total: {type: Number, required: true},
    status: {type: String, required: true}
});

export default mongoose.model<IBooking>('Booking', BookingSchema);