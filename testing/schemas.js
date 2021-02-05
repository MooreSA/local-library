const mongoose = require('mongoose');

const { Schema } = mongoose;

const newSchema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true,
  },
  mixed: Schema.Types.Mixed,
  _someID: Schema.Types.ObjectId, // represents a specific instance of a model in the DB
  // for example, a book might use this to represent it's author object
  array: [],
  ofString: [String],
  // literally just an array of Strings, can be an array of any item.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
