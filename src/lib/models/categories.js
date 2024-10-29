import mongoose from 'mongoose';
const { Schema } = mongoose;
const categorySchema = new Schema({
    title : string,
    description:string,
    thumbnail :string,
})
export const categoyModal = mongoose.model('categories', categorySchema);

