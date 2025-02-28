"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(user, residency, message, createdAt, upVotes, downVotes) {
        this.user = user;
        this.residency = residency;
        this.message = message;
        this.createdAt = createdAt;
        this.upVotes = upVotes;
        this.downVotes = downVotes;
    }
}
exports.Comment = Comment;
