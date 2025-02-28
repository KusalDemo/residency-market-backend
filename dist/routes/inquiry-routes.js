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
const inquiry_data_store_1 = require("../database/inquiry-data-store");
const inquiryRouter = express_1.default.Router();
inquiryRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiry = req.body;
        const savedInquiry = yield (0, inquiry_data_store_1.addInquiry)(inquiry);
        res.status(200).send(savedInquiry);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
inquiryRouter.get('/getUserInquiries/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const inquiries = yield (0, inquiry_data_store_1.getInquiriesByUserId)(userId);
        res.status(200).send(inquiries);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
inquiryRouter.get('/getResidencyInquiries/:residencyId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencyId = req.params.residencyId;
        let inquiries = yield (0, inquiry_data_store_1.getInquiriesByResidencyId)(residencyId);
        res.status(200).send(inquiries);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
inquiryRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiryId = req.params.id;
        const userAndResidency = req.body;
        console.log(`userAndResidency: ${JSON.stringify(userAndResidency)} | inquiryId: ${inquiryId}`);
        yield (0, inquiry_data_store_1.removeInquiry)(inquiryId, userAndResidency.userId, userAndResidency.residencyId);
        res.status(200).send();
    }
    catch (error) {
        console.log(`Error occurred: ${error}`);
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
inquiryRouter.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiryId = req.params.id;
        const inquiry = req.body;
        const updatedInquiry = yield (0, inquiry_data_store_1.updateInquiry)(inquiryId, inquiry);
        res.status(200).send(updatedInquiry);
    }
    catch (error) {
        error instanceof Error ? res.status(400).send(error.message) : res.status(500).send(error);
    }
}));
exports.default = inquiryRouter;
