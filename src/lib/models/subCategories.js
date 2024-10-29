import mongoose from 'mongoose';
const { Schema } = mongoose;
const subCategorySchema = new Schema({
    title : string,
    description:string,
    thumbnail :string,
    category:{type:mongoose.Types.ObjectId,ref:"categories"}
})
export const subcategoyModal = mongoose.model('subcategories', subCategorySchema);

