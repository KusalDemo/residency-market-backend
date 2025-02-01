import express from 'express';

const commentRouter = express.Router();

commentRouter.post('/create', async (req, res) => {
    try{
        const comment = req.body;
        const savedComment = `Comment saved: ${comment}`;
        res.status(201).send(savedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.delete('/delete/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const deletedComment = `Comment deleted: ${commentId}`;
        res.status(204).send(deletedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.put('/update/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const updatedComment = `Comment updated: ${commentId}`;
        res.status(204).send(updatedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.get('/get/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const fetchedComment = `Comment fetched: ${commentId}`;
        res.status(200).send(fetchedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.get('/get', async (req, res) => {
    try{
        const fetchedComments = `Comments fetched: Data...`;
        res.status(200).send(fetchedComments);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

commentRouter.put('/upvote/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const upvotedComment = `Comment upvoted: ${commentId}`;
        res.status(204).send(upvotedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

commentRouter.put('/downvote/:id', async (req, res) => {
    try{
        const commentId = req.params.id;
        const downvotedComment = `Comment downvoted: ${commentId}`;
        res.status(204).send(downvotedComment);
    }catch (error){
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

export default commentRouter;