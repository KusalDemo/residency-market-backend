"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
class Booking {
    constructor(residency, user, startDate, endDate, total, status) {
        this.residency = residency;
        this.user = user;
        this.startDate = startDate;
        this.endDate = endDate;
        this.total = total;
        this.status = status;
    }
}
exports.Booking = Booking;
