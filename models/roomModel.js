const mongoose = require('mongoose')
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter room name"],
    trim: true,
    maxLength: [100, "Room Name can not be excced 100 Char"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price"],
    maxLength: [4, "Room price can not be excced 4 digits"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter room description"],
  },
  address : {
      type : String
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter room capacity "],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter number of beds "],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  aircondition: {
    type: Boolean,
    default: false,
  },
  petsAllow: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  rattings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Category"],
    enum: {
      values: ["King", "Single", "Twins"],
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      ratting: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        trim: true,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.models.Rooms || mongoose.model('Rooms', roomSchema);
