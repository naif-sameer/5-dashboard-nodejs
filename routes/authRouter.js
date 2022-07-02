const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const passport = require('passport');

// router.use((req, res, next) => {
//   const users = {
//     id: 1,
//     token: 'naif',
//   };
//   const isUser = users.token == req.cookies.token;

//   if (isUser) {
//     res.redirect('/');
//   } else {
//     res.redirect('/login');
//   }
// });
//login
router.get('/login', function (req, res, next) {
  res.render('auth/login', {});
});

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// router.post(
//   '/login',
//   [
//     check('email').notEmpty().withMessage('please enter your email'),
//     check('email').isEmail().withMessage('please enter valid email'),
//     check('password').notEmpty().withMessage('please enter your password'),
//     check('password')
//       .isLength({ min: 5, max: 30 })
//       .withMessage('password must be more between 5 and 30'),
//   ],
//   (req, res, next) => {
//     const errors = validationResult(req);

//     if (errors.isEmpty()) {
//       next();
//     } else {
//       var validationMassages = errors.errors.map((error) => error.msg);

//       // [...errors.errors.msg];

//       // for (let i = 0; i < errors.errors.length; i++) {
//       //   validationMassages.push(errors.errors[i].msg);
//       // }
//       req.flash('loginError', validationMassages);

//       res.redirect('login');
//       console.log(validationMassages);
//     }
//   },
//   passport.authenticate('local-login', {
//     successRedirect: 'profile',
//     failureRedirect: 'login',
//     failureFlash: true,
//   })
// );

module.exports = {
  authRouters: router,
};
