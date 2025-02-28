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
const booking_data_store_1 = require("../database/booking-data-store");
const bookingRouter = express_1.default.Router();
bookingRouter.post('/book', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = req.body;
        console.log(`booking: ${JSON.stringify(booking)}`);
        const placedBooking = yield (0, booking_data_store_1.bookResidency)(booking);
        res.status(201).send(placedBooking);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
bookingRouter.get('/getOwns/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const allBookings = yield (0, booking_data_store_1.getBookings)(userId);
        res.status(200).send(allBookings);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
bookingRouter.get('/get/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
bookingRouter.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingId = req.params.id;
        const booking = req.body;
        yield (0, booking_data_store_1.updateBooking)(bookingId, booking);
        res.status(204).send();
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
bookingRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingToCancel = req.params.id;
        yield (0, booking_data_store_1.cancelBooking)(bookingToCancel);
        res.status(204).send();
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
exports.default = bookingRouter;
