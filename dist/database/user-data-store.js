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
exports.deleteUserComment = exports.addUserComment = exports.addUserResidency = exports.updateUser = exports.loginUser = exports.registerUser = void 0;
const IUser_1 = __importDefault(require("../models/IUser"));
const User_1 = require("../models/User");
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchedUser = yield IUser_1.default.findOne({ email: user.email });
        if (!fetchedUser) {
            /*const encryptedPassword = await bcrypt.hash(user.password, 10);*/
            const newUser = new User_1.User(user.name, user.email, user.password, user.residencies, user.inquiries);
            yield IUser_1.default.create(newUser);
            return newUser;
        }
        else {
            throw new Error(`User already exists`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.registerUser = registerUser;
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchedUser = yield IUser_1.default.findOne({ email: user.email });
        if (fetchedUser) {
            /* const isPasswordValid = await bcrypt.compare(user.password, fetchedUser.password);*/
            const passwordMatch = fetchedUser.password.trim() === user.password.trim();
            if (!passwordMatch) {
                throw new Error("Invalid email or password");
            }
            console.log(`User logged in successfully : ${fetchedUser}`);
            return fetchedUser;
        }
        return null;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.loginUser = loginUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield IUser_1.default.updateOne({ _id: id }, user);
        return user;
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.updateUser = updateUser;
const addUserResidency = (id, residencyId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield IUser_1.default.findByIdAndUpdate(id, {
            $push: { residencies: residencyId },
        }, { new: true });
        if (!updatedUser) {
            throw new Error(`User with id : ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.addUserResidency = addUserResidency;
const addUserComment = (id, commentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield IUser_1.default.findByIdAndUpdate(id, {
            $push: { comments: commentId },
        }, { new: true });
        if (!updatedUser) {
            throw new Error(`User with id : ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.addUserComment = addUserComment;
const deleteUserComment = (id, commentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield IUser_1.default.findByIdAndUpdate(id, {
            $pull: { comments: commentId },
        }, { new: true });
        if (!updatedUser) {
            throw new Error(`User with id : ${id} not found`);
        }
    }
    catch (error) {
        throw error instanceof Error ? error : new Error(`Error occurred: ${error}`);
    }
});
exports.deleteUserComment = deleteUserComment;
