import express from 'express';
import jwt from 'jsonwebtoken';
import { Auth } from '../models/Authmodels.js';
import { Admin } from '../models/Adminmodel.js';
import { Doc } from '../models/Docmodels.js';

export const Log = async (req, res) => {
    try {
        let { name, Id, role } = req.body
        if (!name || !Id || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        let user;
        if (role.toLowerCase() === 'admin') {
            user = await Admin.findOne({ name, Id })
        }
        if (role.toLowerCase() === 'doctor') {
            user = await Doc.findOne({ name, Id })
        }
        if (!user) {
            return res.status(400).json({ message: "User not found in database" })
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        },
            process.env.SECRET
        );
        const exist = await Auth.findOne({ Id })
        if (exist) {
            return res.status(400).json({ message: 'Id already exist' })
        }
        const addauth = new Auth({
            name,
            Id,
            role
        })
        await addauth.save()
        return res.status(200).json({
            token,
            role,
            user: addauth
        });
    }
    catch (error) {
        console.log(error)
    }
}
export default Log;