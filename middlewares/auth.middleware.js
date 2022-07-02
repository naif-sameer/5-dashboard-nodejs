// const passport = require('passport');
// const { check, validationResult } = require('express-validator');

// //middleware to check if user is login
// isAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// };

// module.exports = {
//   isAuthenticated,
// };
const users = [
  {
    id: 1,
    token: 'naif',
  },
];

const auth = (req, res, next) => {
  console.log('---------------');
  console.log(req.cookies);
  const isUser = users.some((item) => item.token === req.cookies.token);

  console.log(isUser);
  if (isUser) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = {
  auth,
};
