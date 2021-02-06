const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// setup a "Virtual" to access the full name of the author
// AuthorSchema.virtual('name').get(() => (`${this.family_name}, ${this.first_name}`));
AuthorSchema
  .virtual('name')
  .get(function getFullName() {
    return `${this.family_name}, ${this.first_name}`;
  });

// virtual for this url
AuthorSchema
  .virtual('url')
  .get(function getUrl() {
    return `/catalog/author/${this._id}`;
  });

// virtual for authors lifespan
AuthorSchema
  .virtual('lifespan')
  .get(function getLifeSpan() {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
  });
// export this thing
module.exports = mongoose.model('Author', AuthorSchema);
