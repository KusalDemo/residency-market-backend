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
exports.getAllComments = exports.downVoteComment = exports.upVoteComment = exports.updateComment = exports.deleteComment = exports.getCommentsByResidencyId = exports.addComment = void 0;
const IComment_1 = __importDefault(require("../models/IComment"));
const user_data_store_1 = require("./user-data-store");
const addComment = (comment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedComment = yield IComment_1.default.create(comment);
        yield (0, user_data_store_1.addUserComment)(comment.user, savedComment._id);
        return savedComment;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.addComment = addComment;
const getCommentsByResidencyId = (residencyId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield IComment_1.default.find({ residency: residencyId });
        return comments;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getCommentsByResidencyId = getCommentsByResidencyId;
const deleteComment = (commentId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedComment = yield IComment_1.default.deleteOne({ _id: commentId });
        yield (0, user_data_store_1.deleteUserComment)(userId, commentId);
        return deletedComment;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.deleteComment = deleteComment;
const updateComment = (commentId, comment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedComment = yield IComment_1.default.updateOne({ _id: commentId }, comment);
        return updatedComment;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.updateComment = updateComment;
const upVoteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedComment = yield IComment_1.default.updateOne({ _id: commentId }, { $inc: { upVotes: 1 } });
        return updatedComment;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.upVoteComment = upVoteComment;
const downVoteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedComment = yield IComment_1.default.updateOne({ _id: commentId }, { $inc: { downVotes: 1 } });
        return updatedComment;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.downVoteComment = downVoteComment;
const getAllComments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield IComment_1.default.find();
        return comments;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getAllComments = getAllComments;
