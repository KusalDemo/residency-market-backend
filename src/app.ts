import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import customerRouter from "./routes/user-routes";
import residencyRouter from "./routes/residency-routes";
import bookingRouter from "./routes/booking-routes";
import inquiryRouter from "./routes/inquiry-routes";
import commentRouter from "./routes/comment-routes";
import {authenticateToken} from "./routes/user-routes";
import {verifyToken} from "./util/jwt";

let app = express();
dotenv.config();

app.use(express.json());

const cors = require('cors')
app.use(cors())

mongoose
    .connect(process.env.MONGO_URI as string)
    .then(()=>{
        console.log(`Connected to DB`);
    })
    .catch((err)=>{
        console.log(err);
    })


app.use("/api/user",customerRouter);

app.use(authenticateToken);

app.use("/api/residency",residencyRouter);
app.use("/api/booking",bookingRouter);
app.use("/api/inquiry",inquiryRouter);
app.use("/api/comment",commentRouter)

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
})