const BookInstance = require('../models/bookinstance');

// Display all book instances GET
exports.bookinstanceList = (req, res, next) => {
  // find all the books
  BookInstance.find()
  // get the book associated with it
    .populate('book')
    .exec((err, bookInstanceList) => {
      if (err) next(err);
      else {
        // first, sort the books by their titles
        bookInstanceList.sort((bookA, bookB) => {
          if (bookA.book.title > bookB.book.title) return 1;
          return -1;
        });

        // const myBookInstanceList = bookInstanceList.map((book) => {
        //   if (book.status === 'Available') return { ...book, isAvailable: true };
        //   if (book.status === 'Maintenance') return { ...book, isMaintenance: true };
        //   if (book.status === 'Loaned') return { ...book, isLoaned: true };
        //   return { ...book, isReserved: true };
        // });
        res.render('bookInstanceList', { title: 'Book Instance List', bookInstanceList });
      }
    });
};
// GET specific book instance
exports.bookinstanceDetail = (req, res) => res.send('Not Implemeneted: BookInstance detail GET');

// Create form GET
exports.bookinstanceCreateGet = (req, res) => res.send('Not Implemeneted: BookInstance create GET');

// create form POST
exports.bookinstanceCreatePost = (req, res) => res.send('Not Implemeneted: BookInstance create POST');

// delete form GET
exports.bookinstanceDeleteGet = (req, res) => res.send('Not Implemeneted: BookInstance Delete GET');

// delete form POST
exports.bookinstanceDeletePost = (req, res) => res.send('Not Implemeneted: BookInstance Delete POST');

// update form GET
exports.bookinstanceUpdateGet = (req, res) => res.send('Not Implemeneted: BookInstance Update Get');

// update form POST
exports.bookinstanceUpdatePost = (req, res) => res.send('Not Implemeneted: BookInstance Update POST');
