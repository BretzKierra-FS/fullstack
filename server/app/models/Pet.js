const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: [true, 'please add the pet name'],
    unique: true,
    trim: true,
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  age: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Descriptions cannot be more than 500 characters'],
  },
  owner: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner',
    },
  ],
});

module.exports = mongoose.model('Pet', petSchema);
