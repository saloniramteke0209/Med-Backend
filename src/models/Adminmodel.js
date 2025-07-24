import mongoose from "mongoose";

export const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Admin = mongoose.model('Admin', adminSchema)