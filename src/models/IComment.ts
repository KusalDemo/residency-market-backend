import mongoose, {Schema, Document}  from "mongoose";

export interface IComment extends Document {
    user: mongoose.Schema.Types.ObjectId;
    residency: mongoose.Schema.Types.ObjectId;
    message: string;
    createdAt: Date;
    upVotes: number;
    downVotes: number;
}

let CommentSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    residency: {type: mongoose.Schema.Types.ObjectId, ref: 'Residency', required: true},
    message: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    upVotes: {type: Number, default: 0},
    downVotes: {type: Number, default: 0}
});

export default mongoose.model<IComment>('Comment', CommentSchema);