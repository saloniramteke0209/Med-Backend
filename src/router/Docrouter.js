import express from 'express'
import Doctor from '../controller/Docontroller.js'

const Docrouter = express.Router()

Docrouter.post('/doc', Doctor)

export default Docrouter;