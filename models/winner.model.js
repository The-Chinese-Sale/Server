const mongoose = mongoose.requiered("mongoose")

const winSchema = new mongoose.Schema({
    user_id: String,
    item_id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    winning_date: { type: Date, default: Date.now() }
})
const Win = mongoose.model("winners", winSchema);

module.exports(Win, winSchema);