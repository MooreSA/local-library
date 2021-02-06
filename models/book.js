const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  // this is a reference to the genre model
  genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
});

// create a virtual for the url

BookSchema.virtual('url').get(function getUrl() {
  return `/catalog/book:${this._id}`;
});

module.exports = mongoose.model('Book', BookSchema);
