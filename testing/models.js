/* eslint-disable no-console */
// models are DEFINED within the Schema interface

// schemas are compiled into models using the mongoose.model() method
// once we have a model all documents will contain the fields described by the schema

const mongoose = require('mongoose');

// get the schema from mongoose
const { Schema } = mongoose;

// defining the schema here
const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// here we compile the schema into a model
// the first argument is the singular name of the collection that will be created
// second arg is the schema to be used in this model
const SomeModel = mongoose.model('SomeModel', SomeModelSchema);

// to create a new instance of the model
const someInstance = new SomeModel({ name: 'awesome' });

someInstance.save((err) => {
  if (err) return console.error(err);
  return null;
});

// it's possible to save an instance of a model upon the first creation of it.

SomeModel.create({ name: 'another value' }, (err, _anotherInstance) => {
  if (err) return console.error(err);
  return null;
});

// it's possible to access the values of the fields using dot notation
console.log(someInstance.name); // 'awesome'

someInstance.name = 'This is also neat'; // possible to change the fields here
// we still have to save it though to store the value in the database
someInstance.save((err) => {
  if (err) return console.error(err);
  return null;
});

// How to search for a record in the DB
const exampleSchema = new Schema();

const Athlete = mongoose.model('Athlete', exampleSchema);

// find all athletes who have a sport field with the value Tennis
// Select the name and the age field of those athletes
Athlete.find({ sport: 'Tennis' }, 'name age', (err, athletes) => {
  if (err) throw err;
  console.log(athletes); // this will contain all the athletes who match the criteria
});

// it's also possible to not query immediately
// we can build a query and execute it later
// To do this, do not pass a callback to the find method
const query = Athlete.find({ sport: 'Tennis' });

query.select('name age');
query.limit(5);
query.sort({ age: -1 });
query.exec((err, athletes) => {
  if (err) throw err;
  console.log(athletes);
});

const dummyCallback = (err, result) => {
  if (err) throw err;
  console.log(result);
};
// while the find method is neat
// there is also the where function
// this looks:

Athlete.find()
  .where('sport').equals('Tennis')
  .where('age')
  .gt(17) // > 17
  .lt(50) // < 50
  .limit(5)
  .sort({ age: -1 })
  .select('name age')
  .exec(dummyCallback());
