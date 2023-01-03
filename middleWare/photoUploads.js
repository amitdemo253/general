import fs from 'fs';
 import Multer from 'multer';
// import multer from "multer"
import path from 'path';
import multerS3 from "multer-s3"
// import config from './../../config';  //configuration file to get project root path
const FILENAME = 'image';
const rootPath=path.join(__dirname, "../");
console.log(rootPath)
const uploadDir = rootPath +'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

/**
*	multer setting for photo upload storage and imagename setting, also
*	set the file details in request object
*/
let photoStorage = Multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("asfasfd")
       cb(null, uploadDir)
   },
   filename: function (req, file, cb) {
        cb(null, "file" + '_' + Date.now() + path.extname(file.originalname));
   }
})

// /**
// *	Function to set storage for single upload, named as FILENAME
// */
export const singleFileUpload = Multer({ storage:photoStorage});

// AWS.config.update({
//   accessKeyId: "AKIAZWXOGET64LYNGZNQ",
//   secretAccessKey: "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",
// });
// var s3 = new AWS.S3();

// console.log(s3)
// export const singleFileUpload=Multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "fantasyquy",
//     key: function (req, file, cb) {
//       cb(null, "image" + Date.now() + file.originalname);
//     },
//   }),
//   limits: { fileSize: 30000000 }, // In bytes: 30000000 bytes = 30 MB
// }).fields([
//   { name: "image" },
  
// ]);


