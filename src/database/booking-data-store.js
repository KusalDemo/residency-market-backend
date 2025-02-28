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
exports.cancelBooking = exports.updateBooking = exports.getBookings = exports.bookResidency = void 0;
const IBooking_1 = __importDefault(require("../models/IBooking"));
const residency_data_store_1 = require("./residency-data-store");
const bookResidency = (booking) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completedBooking = yield IBooking_1.default.create(booking);
        yield (0, residency_data_store_1.addResidencyBookings)(booking.residency, completedBooking._id);
        return completedBooking;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.bookResidency = bookResidency;
const getBookings = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBookings = yield IBooking_1.default.find({ user: userId }).populate("user", "name email").populate("residency", "title location");
        return allBookings;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getBookings = getBookings;
const updateBooking = (id, booking) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield IBooking_1.default.updateOne({ _id: id }, booking);
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.updateBooking = updateBooking;
const cancelBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const changedBooking = yield IBooking_1.default.findByIdAndUpdate(id, { status: "cancelled" });
        if (changedBooking) {
            yield (0, residency_data_store_1.cancelResidencyBookings)(changedBooking.residency, id);
            return changedBooking;
        }
        else {
            throw new Error(`Booking with id ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.cancelBooking = cancelBooking;
