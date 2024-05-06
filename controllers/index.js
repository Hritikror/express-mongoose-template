const mongoose = require("mongoose");
const User = require("../models/User");

const findUser = async (req, res) => {};

const addUser = async (req, res) => {
  const { username, password } = req.body;
  //console.log(username, password)
  const now = Date.now();
  const newUser = new User({
    username,
    password,
    now,
  });
  try {
    await newUser.save();
  } catch (e) {
    console.log(e);
  }
  return res.status(200).json({ newUser });
};

const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

module.exports = { findUser, addUser, updateUser, deleteUser };
