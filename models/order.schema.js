const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    id: String,
    item_id: String
    , item_name: String,
    item_description: String,
    price: {type:Number,min:0}
});

module.exports = { orderSchema };