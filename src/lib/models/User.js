import mongoose from 'mongoose';
const { Schema } = mongoose;
const userSchema = new Schema({
    fullName : String,
    email:String,
    password:String,
    location :{
        lat :Number,
        long :Number,
    },
    profileImg:String,
    address :String,
    bio:String,
})
export const userModal = mongoose.model.User || mongoose.model('Users', userSchema);

