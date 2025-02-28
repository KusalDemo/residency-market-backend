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
exports.deleteResidencyInquiries = exports.addResidencyInquiries = exports.cancelResidencyBookings = exports.addResidencyBookings = exports.deleteResidency = exports.updateResidency = exports.getResidenciesByUserId = exports.getResidencyById = exports.getResidencies = exports.createResidency = void 0;
const IResidency_1 = __importDefault(require("../models/IResidency"));
const user_data_store_1 = require("./user-data-store");
const createResidency = (residency) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let savedResidency = yield IResidency_1.default.create(residency);
        yield (0, user_data_store_1.addUserResidency)(residency.owner, savedResidency._id);
        return residency;
    }
    catch (error) {
        console.log(`ERROR: ${error}`);
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.createResidency = createResidency;
const getResidencies = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencies = yield IResidency_1.default.find().populate("owner", "email");
        return residencies;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getResidencies = getResidencies;
const getResidencyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residency = yield IResidency_1.default.findById(id);
        return residency;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getResidencyById = getResidencyById;
const getResidenciesByUserId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const residencies = yield IResidency_1.default.find({ owner: id }).populate("owner", "name email");
        return residencies;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.getResidenciesByUserId = getResidenciesByUserId;
const updateResidency = (id, residency) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let updatedResidency = yield IResidency_1.default.findByIdAndUpdate(id, residency, { new: true });
        if (!updatedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
        return updatedResidency;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.updateResidency = updateResidency;
const deleteResidency = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedResidency = yield IResidency_1.default.findByIdAndDelete(id);
        if (!deletedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
        return deletedResidency;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.deleteResidency = deleteResidency;
const addResidencyBookings = (id, bookingId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedResidency = yield IResidency_1.default.findByIdAndUpdate(id, {
            $push: { bookings: bookingId },
            $set: { isAvailable: false }
        }, { new: true });
        if (!updatedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.addResidencyBookings = addResidencyBookings;
const cancelResidencyBookings = (id, bookingId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedResidency = yield IResidency_1.default.findByIdAndUpdate(id, {
            $pull: { bookings: bookingId },
            $set: { isAvailable: true }
        }, { new: true });
        if (!updatedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.cancelResidencyBookings = cancelResidencyBookings;
const addResidencyInquiries = (id, inquiryId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedResidency = yield IResidency_1.default.findByIdAndUpdate(id, {
            $push: { inquiries: inquiryId },
        }, { new: true });
        if (!updatedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.addResidencyInquiries = addResidencyInquiries;
const deleteResidencyInquiries = (id, inquiryId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedResidency = yield IResidency_1.default.findByIdAndUpdate(id, {
            $pull: { inquiries: inquiryId },
        }, { new: true });
        if (!updatedResidency) {
            throw new Error(`Residency with id ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.deleteResidencyInquiries = deleteResidencyInquiries;
