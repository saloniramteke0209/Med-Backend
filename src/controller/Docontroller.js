import express from 'express'
import { Doc } from '../models/Docmodels.js'


export const Doctor = async (req, res) => {
    try {
        const { name, Id, role } = req.body
        if (!name || !Id || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Doc.findOne({ Id })
        if (exist) {
            return res.status(400).json({ message: "Id already exist" })
        }
        const addDoc = new Doc({
            name,
            Id,
            role
        })
        await addDoc.save()
        return res.status(200).json({ user: addDoc })
    }
    catch (error) {
        console.log(error)
    }
}

export default Doctor;