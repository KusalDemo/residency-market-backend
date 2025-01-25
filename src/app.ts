import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import customerRouter from "./routes/user-routes";

let app = express();
dotenv.config();

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI as string)
    .then(()=>{
        console.log(`Connected to DB`);
    })
    .catch((err)=>{
        console.log(err);
    })


app.use("/api/user",customerRouter);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
})