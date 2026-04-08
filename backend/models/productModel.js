import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number
    }

});

const Product = mongoose.model("Product", productSchema);

export default Product;
