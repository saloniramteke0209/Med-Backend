
import jwt from 'jsonwebtoken';
import { Auth } from '../models/Authmodels.js';
import { Admin } from '../models/Adminmodel.js';
import { Doctor } from '../models/Docmodels.js';
import { Patient } from '../models/Patientmodel.js';

const Log = async (req, res) => {
    try {
        let { name, Id, role } = req.body
        console.log("Received login request:", req.body);

        if (!name || !Id || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        let user;
        if (role.toLowerCase() === 'admin') {
            user = await Admin.find({ name, Id })
        }
        if (role.toLowerCase() === 'doctor') {
            user = await Doctor.find({ name, Id })
        }
        if (role.toLowerCase() === 'patient') {
            user = await Patient.find({ name, Id })
        }

        if (!user) {
            user = new User({ name, Id, role });
            await user.save();
            return res.status(400).json({ message: "User not found in database" })
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        },
            process.env.SECRET
        );
        return res.status(200).json({
            token,
            role,
            user
        });
    }
    catch (error) {
        console.log(error)
    }
}
export default Log;