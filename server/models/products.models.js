const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title es requerido"]
    },

    price: {
        type: Number,
        required: [true, "Price es requerido"]
    },
    description: {
        type: String
    }
},
    { timestamps: true }
)

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
