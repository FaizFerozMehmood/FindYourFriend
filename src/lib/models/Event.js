import mongoose from 'mongoose';
const { Schema } = mongoose;
const eventSchema = new Schema({
    title : string,
    description:string,
    startTime:string,
    endTime:string,
    startDate:string,
    endDate:string,


    location :{
        lat :Number,
        long :Number,
    },
    createdBy:{type: mongoose.Types.ObjectId,ref:"users"},
    address :string,
    going:{type: mongoose.Types.ObjectId,ref:"users"}
})
export const eventModal = mongoose.model('Events', eventSchema);

