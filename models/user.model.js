const mongoose = require("mongoose");
const orederSchema = require("./order.schema")

const userSchema = new mongoose.Schema({
    id: String,
    user_first_name: String,
    user_last_name: String,
    user_phone: String,
    arr_orders: [orederSchema]
});

const User = mongoose.model("users", userSchema)
module.exports = { User, userSchema };