const mongoose = require('mongoose');

const restroSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  workingHours: {
    monday: { type: String },
    tuesday: { type: String },
    wednesday: { type: String },
    thursday: { type: String },
    friday: { type: String },
    saturday: { type: String },
    sunday: { type: String },
  },
  owner: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
  }
});

const Restro = mongoose.model('Restro', restroSchema);

module.exports = Restro;
