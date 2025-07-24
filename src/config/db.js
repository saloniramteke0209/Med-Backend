import mongoose from 'mongoose'

export const Connect = async () => {
    try {
        const mon = await mongoose.connect(process.env.URI)
        console.log("Connected Successfully")
    }
    catch (error) {
        console.log(error)
    }
}