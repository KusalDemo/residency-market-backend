import mongoose, {Schema, Document} from 'mongoose';

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    residencies: mongoose.Schema.Types.ObjectId[];
    inquiries: mongoose.Schema.Types.ObjectId[];
    comments: mongoose.Schema.Types.ObjectId[]
}

let userSchema = new Schema<IUser>({
    name: {type:String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    residencies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Residency'}],
    inquiries: [{type: mongoose.Schema.Types.ObjectId, ref: 'Inquiry'}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});


export default mongoose.model<IUser>('User', userSchema);