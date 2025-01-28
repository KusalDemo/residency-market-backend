export class Inquiry {
    residency: string;
    user: string;
    message: string;
    createdAt: Date;

    constructor(residency: string, user: string, message: string, createdAt: Date) {
        this.residency = residency;
        this.user = user;
        this.message = message;
        this.createdAt = createdAt;
    }
}