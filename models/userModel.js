const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be up to 6 characters"],
    },
    FirstName: {
        type: String,
        required: [true, "Please add a FirstName"],
      },
    MiddleName: {
        type: String,
      },
    LastName: {
        type: String,
      },
    Degree: {
        type: String,
      },
    PreferredName: {
        type: String,
      },
    PrimaryPhone: {
        type: String,
      },
    SecondaryPhone: {
        type: String,
      },
    SecPhoneisfor: {
        type: String,
      },
    FaxNumber: {
        type: String,
      },
    PrefContMethod: {
        type: String,
      },
    Position: {
        type: String,
      },
    Institution: {
        type: String,
      },
    Department: {
        type: String,
      },
    StreetAddress: {
        type: String,
      },
      City: {
        type: String,
      },
      State: {
        type: String,
      },
      Zip: {
        type: String,
      },
      Country : {
        type: String,
      },
      Addressisfor : {
        type: String,
      },
      AvailableasaReviewer : {
        type: String,
      },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;