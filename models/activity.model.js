const mongoose = require("mongoose");
const schema = mongoose.Schema;

const activitySchema = schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: Number, default: 0 }
});

module.exports = activitySchema;
