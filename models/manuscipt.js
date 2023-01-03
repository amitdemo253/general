const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contentSchema = new Schema(
  {
   articleType: {
      type:String,
    },
    files: {
      type: [],
    },
    author: {
        type:Schema.ObjectId,
        required: true,
    },
    
  },
  {
    timestamps: true,
    strict: true,
    versionKey: false,
  }
);


module.exports = mongoose.model("content", contentSchema);
