import {Comment} from "../models/Comment";
import IComment from "../models/IComment";

export const addComment = async (comment: Comment) => {
    try{
        const newComment = new Comment(comment.user, comment.residency, comment.message, comment.createdAt, comment.upVotes, comment.downVotes);
        const savedComment = IComment.create(newComment);
        return savedComment
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const getCommentsByResidencyId = async (residencyId: string) => {
    try{
        const comments = await IComment.find({residency: residencyId});
        return comments;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const deleteComment = async (commentId: string) => {
    try{
        const deletedComment = await IComment.deleteOne({_id: commentId});
        return deletedComment;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const updateComment = async (commentId: string, comment: Comment) => {
    try{
        const updatedComment = await IComment.updateOne({_id: commentId}, comment);
        return updatedComment;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const upVoteComment = async (commentId: string) => {
    try{
        const updatedComment = await IComment.updateOne({_id: commentId}, {$inc: {upVotes: 1}});
        return updatedComment;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}

export const downVoteComment = async (commentId: string) => {
    try{
        const updatedComment = await IComment.updateOne({_id: commentId}, {$inc: {downVotes: 1}});
        return updatedComment;
    }catch (error){
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
}


