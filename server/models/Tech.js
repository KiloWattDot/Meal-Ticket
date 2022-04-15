const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  resid: {
    type: String,
    required: true,
    // unique: true,
  },
  image_url: {
    type: String,
  },
  foodname: {
    type: String,
  },
  rating: {
    type: Number,
  },
  numOfReviews: {
    type: Number,
  },
  price: {
    type: String,
  },
  tag: {
    type: String,
  },
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
