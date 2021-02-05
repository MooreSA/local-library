const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorSchema = Schema({
  name: String,
  // the stories field is an object of another model
  // the 'ref' tells the schema what models are valid to be here
  // ObjectID will store just the id of the related model
  // can use populate() to fill it with actual data
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  title: String,
});

const Story = mongoose.model('Story', storySchema);
const Author = mongoose.model('Author', authorSchema);

const dummyCallback = (err) => { if (err) throw err; };

// create a a new Author
const Bob = new Author({ name: 'Bob' });

Bob.save((err) => {
  if (err) throw err;

  // bob exists, so we can give him a story
  const story = new Story({
    title: 'Bob Plays Sports!',
    author: Bob._id,
  });
});
