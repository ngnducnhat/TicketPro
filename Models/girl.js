const { model, Schema } = require("mongoose");

let girlSchema = new Schema({
    id: String,
    link: String,
});

module.exports = model("girl", girlSchema);
