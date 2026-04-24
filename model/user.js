import mongoose from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/productDB");
// eslint-disable-next-line no-undef
const productSchema=mongoose.Schema({
    Productname: String,
    price: Number,
    Details:String,
    Images:String

})

// eslint-disable-next-line no-undef
const usemodels = mongoose.model("user", productSchema);
export default usemodels;