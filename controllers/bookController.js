const async = require('async');

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

// exports.index = (req, res) => res.send('Not Implemented: Site Homepage');
// exports.index = (req, res, _next) => res.render('cool', { title: 'neat!' });

exports.index = (req, res, _next) => {
  // run all of these in parallel
  async.parallel({
    // get the count of the books
    bookCount: (callback) => {
      Book.countDocuments({}, callback);
    },
    // get the count of the book instances
    bookInstanceCount: (callback) => {
      BookInstance.countDocuments({}, callback);
    },
    bookInstanceAvailableCount: (callback) => {
      BookInstance.countDocuments({ status: 'Available' }, callback);
    },
    authorCount: (callback) => {
      Author.countDocuments({}, callback);
    },
    genreCount: (callback) => {
      Genre.countDocuments({}, callback);
    },
  }, (err, results) => {
    res.render('index', { title: 'Library Home', error: err, data: results });
  });
};

// book display list GET
// exports.bookList = (req, res) => res.send('Not Implemented: Book list all GET');
exports.bookList = (req, res, next) => {
  Book.find({}, 'title author')
    .populate('author')
    .exec((err, listBooks) => {
      // console.log(listBooks[0].url);
      if (err) { next(err); }
      // Successful, so render
      res.render('bookList', { title: 'Book List', bookList: listBooks });
    });
};

// Book detail GET
exports.bookDetails = (req, res) => res.send('Not Implemented: Book Detail GET');
// Book create GET
exports.bookCreateGet = (req, res) => res.send('Not Implemented: Book create form GET');
// Book create POST
exports.bookCreatePost = (req, res) => res.send('Not Implemented: Book create POST');
// Book delete GET
exports.bookDeleteGet = (req, res) => res.send('Not Implemented: Book delete GET');
// Book delete POST
exports.bookDeletePost = (req, res) => res.send('Not Implemented: Book delete POSt');
// Book update GET
exports.bookUpdateGet = (req, res) => res.send('Not Implemented: Book update Get');
// Book update POST
exports.bookUpdatePost = (req, res) => res.send('Not Implemented: Book update POST');
