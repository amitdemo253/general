const Document=require("../../models/document")
const fs = require('fs')
const path= require("path")

export const uploadDocuments = async (req, res) => {
    try {
       console.log(req.files)
      console.log(req.body)
      let files=[]
      for(var i=0;i<req.files.length;i++){
        let file_name=req.files[i].filename
        let file_path="https://general.onrender.com/"+file_name
       files.push({file_name,file_path})
      }

      const {author,articleType,reviewer}=req.body
      // let image_name=req.file.filename
      // let image_path="http://localhost:9000/"+image_name
      // console.log(image_name,image_path)
      const documentDetails = await Document.create({articleType,files,author,reviewer})

      return res.status(200).json({
        success: true,
        message: "documents uploaded successfully",
        data: documentDetails,
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
      const feedbackDetails = await Document.find({auhthor:_id})
      
      return res.status(200).json({
        success: true,
        message: "all reviewes",
        data:feedbackDetails ,
      });
    } catch (error) {
      console.log("there are ", error);
      return res
        .status(500)
        .json({ success: false, message: "There are some error" });
    }
  };
  export const getFeedback = async (req, res) => {
    try {
     
      const {_id}=req.query
      const feedbackDetails = await Document.findOne({_id})
      
      return res.status(200).json({
        success: true,
        message: "review",
        data:feedbackDetails ,
      });
    } catch (error) {
      console.log("there are ", error);
      return res
        .status(500)
        .json({ success: false, message: "There are some error" });
    }
  };

  export const getReviewInvites = async (req, res) => {
    try {
     
      
      const feedbackDetails = await Document.find({reviewer:req.query._id})
      
      return res.status(200).json({
        success: true,
        message: "review",
        data:feedbackDetails ,
      });
    } catch (error) {
      console.log("there are ", error);
      return res
        .status(500)
        .json({ success: false, message: "There are some error" });
    }
  };
  export const getReviewInvite = async (req, res) => {
    try {
     
      
      const feedbackDetails = await Document.findOne({_id:req.query._id})
      console.log(req.query._id,feedbackDetails)
      
      return res.status(200).json({
        success: true,
        message: "review",
        data:feedbackDetails ,
      });
    } catch (error) {
      console.log("there are ", error);
      return res
        .status(500)
        .json({ success: false, message: "There are some error" });
    }
  };
  export const submitReview = async (req, res) => {
    try {
     
      const {option10,_id,comment,option1,option2,option3,option4,option5,option6,option7,option8,option9}=req.body
      const feedbackDetails = await Document.findOne({_id})
      if( option10==true || option10==false){
        feedbackDetails.option10=option10
      }
      if( option10==true ){
        feedbackDetails.option10=option10
        feedbackDetails.status=true;
      }
      if(  option10==false){
        feedbackDetails.option10=option10
        feedbackDetails.status=false;
      }
      if( option9==true || option9==false){
        feedbackDetails.option9=option9
        
      }
      if( option8==true || option8==false){
        feedbackDetails.option8=option8
        
      }
      if( option7==true || option7==false){
        feedbackDetails.option7=option7
        
      }
      if( option6==true || option6==false){
        feedbackDetails.option6=option6
        
      }
      if( option5==true || option5==false){
        feedbackDetails.option5=option5
        
      }
      if( option4==true || option4==false){
        feedbackDetails.option4=option4
        
      }
      if( option3==true || option3==false){
        feedbackDetails.option3=option3
        
      }
      if( option2==true || option2==false){
        feedbackDetails.option2=option2
        
      }
      if( option1==true || option1==false){
        feedbackDetails.option1=option1
        
      }
    
      if(comment){
        feedbackDetails.comment=comment
      }
      await feedbackDetails.save()
      
      
      return res.status(200).json({
        success: true,
        message: "review submitted successfully",
        data:feedbackDetails ,
      });
    } catch (error) {
      console.log("there are ", error);
      return res
        .status(500)
        .json({ success: false, message: "There are some error" });
    }
  };