const { Router } = require('express');
const { User } = require('./../models/user');
const fileHandler = require('./../utils/multerFiles');

const router = Router();

// user info

router.post('/user/update-info', (req, res) => {
  const { f_name, l_name, phone_code, phone_number, email, gender, date } =
    req.body;

  const user = new User({
    f_name,
    l_name,
    phone_code,
    phone_number,
    email,
    gender,
    date,
  });

  user
    .save()
    .then(() => res.redirect('/'))
    .catch((err) => res.json({ err }));
});

router.post(
  '/user/update-avatar',
  fileHandler.single('user_avatar'),
  (req, res) => {
    const { user_id } = req.body;
    // console.log(), '-------------');
    console.log(user_id);


    User.updateOne(
      { _id: `${user_id}` },
      { user_avatar: req.file.filename },
      function (err, doc) {
        if (err) return res.json(err);
        return res.send('Succesfully saved.');
      }
    );

    User.findOne({_id: user_id}).then((item ) => console.log(item))

    // User.updateOne(
    //   { _id: user_id },
    //   {
    //     user_avatar: req.file.filename,
    //   }
    // )
    //   .then(() => res.redirect('/'))
    //   .catch((err) => res.json(err));
  }
);

module.exports = router;
