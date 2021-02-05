const mongoose = require('mongoose');

const { Schema } = mongoose;

const GenreSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
  },
});

GenreSchema.virtual('url').get(() => `/catalog/genre/${this._id}`);

module.exports = mongoose.model('Genre', GenreSchema);