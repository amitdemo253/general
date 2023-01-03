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
    status:{
     type:Boolean,
     default:false
    },
    comment:{
      type:String,

    },
    author: {
        type:Schema.ObjectId,
        required: true,
    },
    reviewer:{
      type:Schema.ObjectId,
        required: true,
    },option1:{
      type:Boolean,
      default:false
    },
    option2:{
      type:Boolean,
      default:false
    }
    ,option3:{
      type:Boolean,
      default:false
    },
    option4:{
      type:Boolean,
      default:false
    }
    ,option5:{
      type:Boolean,
      default:false
    },
    option6:{
      type:Boolean,
      default:false
    }
    ,option7:{
      type:Boolean,
      default:false
    },
    option8:{
      type:Boolean,
      default:false
    }
    ,option9:{
      type:Boolean,
      default:false
    },
    option10:{
      type:Boolean,
      default:false
    }
    
  },
  {
    timestamps: true,
    strict: true,
    versionKey: false,
  }
);


module.exports = mongoose.model("document", contentSchema);
