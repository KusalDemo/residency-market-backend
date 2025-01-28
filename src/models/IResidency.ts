import mongoose, {Schema, Document} from 'mongoose';

export interface IResidency extends Document{
    title: string;
    description:string;
    location :string;
    price:number;
    owner: mongoose.Schema.Types.ObjectId;
    isAvailable: boolean;
    facilities: [
        {
            bedrooms: number,
            bathrooms: number,
            area: number
        }
    ];
    images: string[];
    bookings: mongoose.Schema.Types.ObjectId[];
    inquiries: mongoose.Schema.Types.ObjectId[];
}

let ResidencySchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    price: {type: Number, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    isAvailable: {type: Boolean, required: true, default: true},
    facilities: [
        {
            bedrooms: { type: Number, required: true },
            bathrooms: { type: Number, required: true },
            area: { type: Number, required: true }
        }
    ],
    images: {type: [String], required: true},
    bookings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}],
    inquiries: [{type: mongoose.Schema.Types.ObjectId, ref: 'Inquiry'}]
});

export default mongoose.model<IResidency>('Residency', ResidencySchema);

