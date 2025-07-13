import express from 'express'
import cors from 'cors'
import dontenv from 'dotenv/config'

const app = express();

// middleware
app.use(cors());
app.use(express.json());
// Routers
app.get('/', (req,res) => {
    res.send("api is working");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`);
})

export default app;