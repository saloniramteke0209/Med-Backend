import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Connect from './config/db.js';
import Authrouter from './router/Authrouter.js';
import Adminrouter from './router/Adminrouter.js';
import Doctorrouter from './router/Docrouter.js';
import Patientrouter from './router/Patientrouter.js';



dotenv.config()
Connect()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/', Authrouter)
app.use('/api', Adminrouter)
app.use('/api', Doctorrouter)
app.use('/api', Patientrouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})