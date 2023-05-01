import mongoose from 'mongoose'



const dbConncect = async () =>{
    try {
        const connect = await mongoose.connect(process.env.DB_LOCAL_URI)
        console.log('Mongo DB Connected');
    } catch (error) {
        console.log(error);
    }
}

export default dbConncect