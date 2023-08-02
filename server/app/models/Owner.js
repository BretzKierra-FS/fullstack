const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add the name'],
    unique: true,
    trim: true,
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    match: [
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      'Please enter a valid email addresss',
    ],
  },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet',
    },
  ],
  totalPets: Number,
});

module.exports = mongoose.model('Owner', OwnerSchema);
