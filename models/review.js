const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let reviewSchema = new Schema(
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
    reviewer:{
        type:[]
    }
    
  },
  {
    timestamps: true,
    strict: true,
    versionKey: false,
  }
);


module.exports = mongoose.model("review", reviewSchema);
