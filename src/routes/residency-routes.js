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
const residency_data_store_1 = require("../database/residency-data-store");
const Residency_1 = require("../models/Residency");
const residencyRouter = express_1.default.Router();
residencyRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const location = req.body.location;
        const price = req.body.price;
        const owner = req.body.owner;
        const isAvailable = req.body.isAvailable;
        const facilities = req.body.facilities;
        const images = req.body.images;
        const bookings = req.body.bookings;
        const inquiries = req.body.inquiries;
        const residencyToCreate = new Residency_1.Residency(title, description, location, price, owner, isAvailable, facilities, images, bookings, inquiries);
        const residencyPromise = yield (0, residency_data_store_1.createResidency)(residencyToCreate);
        if (residencyPromise) {
            res.status(201).send(residencyPromise);
        }
        else {
            res.status(400).send("Residency not created");
        }
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
residencyRouter.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencyId = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const location = req.body.location;
        const price = req.body.price;
        const owner = req.body.owner;
        const isAvailable = req.body.isAvailable;
        const facilities = req.body.facilities;
        const images = req.body.images;
        const bookings = req.body.bookings;
        const inquiries = req.body.inquiries;
        const residency = new Residency_1.Residency(title, description, location, price, owner, isAvailable, facilities, images, bookings, inquiries);
        const updatedResidency = yield (0, residency_data_store_1.updateResidency)(residencyId, residency);
        res.status(204).send();
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
residencyRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencyId = req.params.id;
        const deletedResidency = yield (0, residency_data_store_1.deleteResidency)(residencyId);
        res.status(204).send();
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
residencyRouter.get('/get-all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencies = yield (0, residency_data_store_1.getResidencies)();
        res.send(residencies);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
residencyRouter.get('/get/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencyId = req.params.id;
        const fetchedResidency = yield (0, residency_data_store_1.getResidencyById)(residencyId);
        res.send(fetchedResidency);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
residencyRouter.get('/getOwns/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencyOwnerId = req.params.id;
        const residencies = yield (0, residency_data_store_1.getResidenciesByUserId)(residencyOwnerId);
        res.send(residencies);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
exports.default = residencyRouter;
