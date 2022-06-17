const mongoose = require("mongoose");
// const bcyptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// User Schema or Document Structure
const notesSchema = new mongoose.Schema({
  // title: {
  //   type:String
  // },
  // description: {
  //   type: String
  // },
  addnotes: {
    type: Buffer,
  },

  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

// Create Model
const Notes = new mongoose.model("NOTES", notesSchema);

module.exports = Notes;
