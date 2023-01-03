const express = require("express");
const router = express.Router();
const path=require("path")
const {
  registerUser,
  loginUser,
  logout,
  test
} = require("../controllers/auth/signup");
const {
  getAllReviewers
} = require("../controllers/reviewer/reviewer");
const {
 uploadDocuments,getAllFeedbacks,getFeedback,getReviewInvites,getReviewInvite,submitReview
} = require("../controllers/author/document");
import {singleFileUpload} from "../middleWare/photoUploads"
import { upload } from "../middleWare/uploads";


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/test", test);
router.get("/reviewers", getAllReviewers);
router.get("/feedbacks", getAllFeedbacks);
router.get("/feedback", getFeedback);
router.get("/reviewInvites", getReviewInvites);
router.get("/reviewInvite", getReviewInvite);
router.post("/submitReview", submitReview);



router.get("/reviewer", test);
router.post("/uploadDocuments",singleFileUpload.array("files"),uploadDocuments)

module.exports = router;