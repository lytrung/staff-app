const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const StaffSchema = new Schema(
  {
    id: Number,
    name: String,
    role: String,
    description: String,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Staff", StaffSchema);