import mongoose from 'mongoose'

const Connect = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log("Connected Successfully")
    }
    catch (error) {
        console.log(error)
    }
}

export default Connect;