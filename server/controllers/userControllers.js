const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const cloudinary = require("../utils/cloudinary");

// signup new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the User");
  }
});

// sign in user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  }
});

// Search user
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

// get my self
const getmyself = asyncHandler(async (req, res) => {
  try {
    const userDetails = req.user;
    return res.status(200).json({ user: { userDetails } });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

// upload profile image
const uploadProfileImage = asyncHandler(async (req, res) => {
  try {
    const file = req.file;

    let user = await User.findById(req.user.id);
    // console.log(req.file);
    // console.log(user);
    // console.log(req.user.id);
    // delete exsisting image from cloudinary
    if (user.cloudinary_id) {
      await cloudinary.uploader.destroy(user.cloudinary_id);
    }

    // upload new image to cloudinary
    const result = await cloudinary.uploader.upload(file.path);

    const data = {
      // name: req.body.name || user.name,
      pic: result.secure_url || user.pic,
      cloudinary_id: result.public_id || user.cloudinary_id,
    };

    user = await User.findByIdAndUpdate(user._id, data, { new: true });
    res.status(200).json({
      message: "image uploaded successfully",
      result,
      user,
    });
    // console.log(req.user._id);
    // database image url upadte
    // return res.status(200).json({ uploadedImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = {
  registerUser,
  authUser,
  allUsers,
  getmyself,
  uploadProfileImage,
};
