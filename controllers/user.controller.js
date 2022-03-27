const User = require("../models/user.model").User

module.exports.addUser = async (req, res) => {
    let user = req.body;
    let a = new User(user);
    try {
        await a.save();
        console.log(a);
        return res.send(a);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

module.exports.SelectItemsuser = async (req, res) => {
    let userid = req.params.id;
    try {
        const order = await User.findById(userid).arr_orders;
        return res.send(order);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);

    }
}
module.exports.AddOrderToUser = async (req, res) => {
    let user = req.body;
    try {
        const userid = await User.findById(user.id)
        if (userid) {
            userid.arr_orders.push(user.arr_orders[0])
            userid.save();
        }
        else {
            let a = new User(user);
            await a.save();
            console.log(a);
            return res.send(a);
    }
        }
    catch {
        console.log(e);
        return res.status(400).send(e);
    }
  

}