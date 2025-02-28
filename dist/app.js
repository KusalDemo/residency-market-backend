"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const residency_routes_1 = __importDefault(require("./routes/residency-routes"));
const booking_routes_1 = __importDefault(require("./routes/booking-routes"));
const inquiry_routes_1 = __importDefault(require("./routes/inquiry-routes"));
const comment_routes_1 = __importDefault(require("./routes/comment-routes"));
const user_routes_2 = require("./routes/user-routes");
let app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log(`Connected to DB`);
})
    .catch((err) => {
    console.log(err);
});
app.use("/api/user", user_routes_1.default);
// @ts-ignore
app.use(user_routes_2.authenticateToken);
app.use("/api/residency", residency_routes_1.default);
app.use("/api/booking", booking_routes_1.default);
app.use("/api/inquiry", inquiry_routes_1.default);
app.use("/api/comment", comment_routes_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});
