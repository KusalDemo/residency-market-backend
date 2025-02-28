"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_data_store_1 = require("../database/comment-data-store");
const commentRouter = express_1.default.Router();
commentRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = req.body;
        const savedComment = yield (0, comment_data_store_1.addComment)(comment);
        res.status(200).json(savedComment);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
commentRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.id;
        const userId = req.body.userId;
        const deletedComment = yield (0, comment_data_store_1.deleteComment)(commentId, userId);
        res.status(204).send(deletedComment);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
commentRouter.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.id;
        let commentToUpdate = req.body;
        const updatedComment = yield (0, comment_data_store_1.updateComment)(commentId, commentToUpdate);
        res.status(204).send(updatedComment);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
commentRouter.get('/get/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencyId = req.params.id;
        const fetchedComment = yield (0, comment_data_store_1.getCommentsByResidencyId)(residencyId);
        res.status(200).send(fetchedComment);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
commentRouter.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchedComments = yield (0, comment_data_store_1.getAllComments)();
        res.status(200).send(fetchedComments);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
commentRouter.put('/upvote/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.id;
        console.log(`commentId : ${commentId}`);
        const upvotedComment = (0, comment_data_store_1.upVoteComment)(commentId);
        res.status(204).send(upvotedComment);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
commentRouter.put('/downvote/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.id;
        const downvotedComment = (0, comment_data_store_1.downVoteComment)(commentId);
        res.status(204).send(downvotedComment);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
exports.default = commentRouter;
