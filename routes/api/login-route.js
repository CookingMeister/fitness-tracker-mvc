const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
      }
      // const validPassword = dbUserData.checkPassword(req.body.password);

      // if (!validPassword) {
      //   res.status(400).json({ message: 'Incorrect password!' });
      //   return;
      // }

      req.session.save(() => {
        req.session.id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: 'An error occurred', error: err });
    });
});

module.exports = router;
