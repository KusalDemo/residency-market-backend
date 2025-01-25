import mongoose, {Schema, Document} from "mongoose";

export interface IInquiry extends Document{
    residency: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
    message: string;
    createdAt: Date;
}

let InquirySchema = new Schema({
    residency: {type: mongoose.Schema.Types.ObjectId, ref: 'Residency', required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    message: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model<IInquiry>('Inquiry', InquirySchema);