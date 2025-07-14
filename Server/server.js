import express from 'express'
import cors from 'cors'
import dontenv from 'dotenv/config'
import connectDB from './config/db.js';
import adminRouter from './routers/admin.routes.js';
import blogRouter from './routers/blog.routes.js';

const app = express();


await connectDB();

// middleware

app.use(cors());
app.use(express.json());

// Routers

app.get('/', (req,res) => {
    res.send("api is working");
})
app.use('/api/admin',adminRouter);
app.use('/api/blog',blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`);
})

export default app;