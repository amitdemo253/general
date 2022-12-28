const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  };

// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { FirstName, email, password } = req.body;
  
    // Validation
    if (!FirstName || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all required fields");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }
  
    // Check if user email already exists
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("Email has already been registered");
    }
  
    // Create new user
    const user = await User.create({
...req.body
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    if (user) {
        res.status(201).json({
            user,
            token
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
    });

// Login User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add email and password");
    }
  
    const user = await User.findOne({ email });
  
    if (!user) {
      res.status(400);
      throw new Error("User not found, please signup");
    }
  
    const passwordIsCorrect = await bcrypt.compare(password, user.password);
  
    const token = generateToken(user._id);
  
    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
  
    if (user && passwordIsCorrect) {
      res.status(200).json({
        user,
        token
      });
    } else {
      res.status(400);
      throw new Error("Invalid email or password");
    }
  });
   
 // Logout User
const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({ message: "Successfully Logged Out" });
  });
  const test = asyncHandler(async (req, res) => {
res.send('test')
  })

    module.exports = {
        registerUser,
        loginUser,
        logout,
        test
      };