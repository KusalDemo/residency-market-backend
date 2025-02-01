import express from 'express';
import {
    addComment,
    deleteComment, downVoteComment,
    getAllComments,
    getCommentsByResidencyId,
    updateComment, upVoteComment
} from "../database/comment-data-store";

const commentRouter = express.Router();

commentRouter.post('/create', async (req, res) => {
    try{
        const comment = req.body;
        const savedComment = await addComment(comment);
        res.status(201).send(savedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.delete('/delete/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const userId = req.body.userId;
        const deletedComment = await deleteComment(commentId, userId);
        res.status(204).send(deletedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.put('/update/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        let commentToUpdate = req.body;
        const updatedComment = await updateComment(commentId, commentToUpdate);
        res.status(204).send(updatedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.get('/get/:id', async (req, res) => {
    try{
        const residencyId = req.params.id;
        const fetchedComment = await getCommentsByResidencyId(residencyId)
        res.status(200).send(fetchedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.get('/get', async (req, res) => {
    try{
        const fetchedComments = await getAllComments();
        res.status(200).send(fetchedComments);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.put('/upvote/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const upvotedComment = upVoteComment(commentId);
        res.status(204).send(upvotedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

commentRouter.put('/downvote/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const downvotedComment = downVoteComment(commentId);
        res.status(204).send(downvotedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

export default commentRouter;