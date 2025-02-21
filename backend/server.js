// Start Server
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from "cors";
import router from './route/Productroutes.js';


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); // Set JSON size limit
app.use('/api', router);



mongoose.connect(process.env.DB_URL).then(() => {
    console.log("✅ DataBase Connect Successfully");
}).catch((err) => {
    console.log("❌ Error Connect To DataBase");
});

app.listen(process.env.PORT, () => {
    console.log(`✅ Server Listening to ${process.env.PORT}`);
});



