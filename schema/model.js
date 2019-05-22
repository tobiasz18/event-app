const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  organization: { type: String },
  location: { type: String },
  category: { type: String },
  imageUrl: { type: String },
  id: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;