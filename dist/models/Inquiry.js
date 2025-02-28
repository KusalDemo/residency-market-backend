"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inquiry = void 0;
class Inquiry {
    constructor(residency, user, message, createdAt) {
        this.residency = residency;
        this.user = user;
        this.message = message;
        this.createdAt = createdAt;
    }
}
exports.Inquiry = Inquiry;
