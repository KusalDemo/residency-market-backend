"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, password, residencies, inquiries) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.residencies = residencies;
        this.inquiries = inquiries;
    }
}
exports.User = User;
