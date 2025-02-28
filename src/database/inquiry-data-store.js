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
exports.updateInquiry = exports.removeInquiry = exports.getInquiriesByResidencyId = exports.getInquiriesByUserId = exports.addInquiry = void 0;
const IInquiry_1 = __importDefault(require("../models/IInquiry"));
const residency_data_store_1 = require("./residency-data-store");
const addInquiry = (inquiry) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedInquiry = yield IInquiry_1.default.create(inquiry);
        if (savedInquiry) {
            yield (0, residency_data_store_1.addResidencyInquiries)(inquiry.residency, savedInquiry._id);
            return savedInquiry;
        }
        else {
            throw new Error(`Inquiry not saved`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.addInquiry = addInquiry;
const getInquiriesByUserId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const inquiries = await IInquiry.find({user: id}).populate("user", "name email").populate("residency", "title location");
        const inquiries = yield IInquiry_1.default.find({ user: id });
        return inquiries;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getInquiriesByUserId = getInquiriesByUserId;
const getInquiriesByResidencyId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiries = yield IInquiry_1.default.find({ residency: id }).populate("user", "name email");
        return inquiries;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getInquiriesByResidencyId = getInquiriesByResidencyId;
const removeInquiry = (inquiryId, userId, residencyId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedInquiry = yield IInquiry_1.default.deleteOne({ _id: inquiryId, user: userId, residency: residencyId });
        if (deletedInquiry) {
            yield (0, residency_data_store_1.deleteResidencyInquiries)(residencyId, inquiryId);
        }
        else {
            throw new Error(`Inquiry not deleted`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.removeInquiry = removeInquiry;
const updateInquiry = (id, inquiry) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield IInquiry_1.default.updateOne({ _id: id }, inquiry);
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.updateInquiry = updateInquiry;
