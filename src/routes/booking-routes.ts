import express from 'express';
import {bookResidency} from "../database/booking-data-store";
import {Booking} from "../models/Booking";

const bookingRouter = express.Router();

bookingRouter.post('/book', async (req, res) => {
    try {
        const booking: Booking = req.body;
        const placedBooking = await bookResidency(booking);
        res.status(201).send(placedBooking);
    } catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

bookingRouter.get('/getOwns/:id', async (req, res) => {
    try {

    } catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

bookingRouter.get('/get/:id', async (req, res) => {
    try {

    } catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
})

bookingRouter.put('/update/:id', async (req, res) => {
    try {

    } catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

bookingRouter.delete('/delete/:id', async (req, res) => {
    try {

    } catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
});

export default bookingRouter;