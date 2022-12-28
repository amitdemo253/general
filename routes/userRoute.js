const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  test
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/test", test);

module.exports = router;