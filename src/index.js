import express from 'express'
import dotenv from 'dotenv'
import { Connect } from './config/db.js'
import cors from 'cors'
import Authrouter from './router/Authrouter.js';
import Adminrouter from './router/Adminrouter.js';
import Docrouter from './router/Docrouter.js';

dotenv.config()
Connect()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', Authrouter)
app.use('/api', Adminrouter)
app.use('/api', Docrouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})