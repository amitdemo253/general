const User =require("../../models/userModel")
const fs = require('fs')
const path= require("path")

export const getAllReviewers = async (req, res) => {
    try {
     
     
      const reviewerDetails = await User.find({role:"reviewer"})
      
      return res.status(200).json({
        success: true,
        message: "all reviewers",
        data:reviewerDetails ,
      });
    } catch (error) {
      console.log("there are ", error);
      return res
        .status(500)
        .json({ success: false, message: "There are some error" });
    }
  };

  export const getAllFeedbacks = async (req, res) => {
    try {
     
      const {_id}=req.query
      const feedbackDetails = await User.find({author:_id})
      console.log("feedback_details")
      return res.status(200).json({
        success: true,
        message: "all reviewers",
        data:feedbackDetails ,
      });
    } catch (error) {
      console.log("there are ", error);
      return res
        .status(500)
        .json({ success: false, message: "There are some error" });
    }
  };

