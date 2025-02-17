import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// routes
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';



const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/auth" , authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});


