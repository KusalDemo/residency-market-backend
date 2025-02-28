"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residency = void 0;
class Residency {
    constructor(title, description, location, price, owner, isAvailable, facilities, images, bookings, inquiries) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.price = price;
        this.owner = owner;
        this.isAvailable = isAvailable;
        this.facilities = facilities;
        this.images = images;
        this.bookings = bookings;
        this.inquiries = inquiries;
    }
}
exports.Residency = Residency;
