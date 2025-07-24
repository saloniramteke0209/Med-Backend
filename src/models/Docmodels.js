import mongoose from "mongoose";

export const docSchema = new mongoose.Schema({
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

export const Doc = mongoose.model('Doc', docSchema)