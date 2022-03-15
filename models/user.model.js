const mongoose = require("mongoose");
const itemChema = require("./item.model")

const userSchema = new mongoose.Schema({
    id: String,
    user_first_name: String,
    user_last_name: String,
    user_phone: String,
    arr_orders: [itemChema]
});
const User = mongoose.model("users", userSchema)
module.exports = { User, userSchema };