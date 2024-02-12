const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    res.render('register');
  });
  
  router.post('/', (req, res) => {
    console.log('register route clicked')
    console.log(req.body);
    // create a new user
    User.create({
      username: req.body.username,
      password: req.body.password,
   })
     .then((userData) => res.status(200).json(userData))
     .catch((err) => res.status(500).json(err));
  });

  module.exports = router;