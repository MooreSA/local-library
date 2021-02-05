const mongoose = require('mongoose');

// setup the connection to atlas
const uri = 'mongodb+srv://admin:Learn9music@cluster0.oremb.mongodb.net/local-library?retryWrites=true&w=majority';
// connect to the atlas server
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// get the connection
const db = mongoose.connection;

// log any errors to the console. I THINK this is working
db.on('error', console.error.bind(console, 'MongoDB connection error'));
