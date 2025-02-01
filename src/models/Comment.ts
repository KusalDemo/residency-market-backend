export class Comment {
    user: string;
    residency: string;
    message: string;
    createdAt: Date;
    upVotes: number;
    downVotes: number;

    constructor(user: string, residency: string, message: string, createdAt: Date, upVotes: number, downVotes: number) {
        this.user = user;
        this.residency = residency;
        this.message = message;
        this.createdAt = createdAt;
        this.upVotes = upVotes;
        this.downVotes = downVotes;
    }
}