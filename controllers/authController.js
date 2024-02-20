const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Register a new user and login to session
const registerUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ where: { username } });
      existingUser
        ? res.status(400).json({ error: 'Username already in use' })
        : bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword) => {
              User.create({
                username,
                password: hashedPassword,
              })
                .then((newUser) => {
                  req.login(newUser, (err) => {
                    if (err) {
                      console.error(err);
                      return res
                        .status(500)
                        .json({ error: 'Internal Server Error' });
                    }
                    req.session.userId = newUser.id;
                    req.session.loggedIn = true; // Set session loggedIn to true
                    req.session.save((err) => {
                      if (err) {
                        console.error(err);
                        return res
                          .status(500)
                          .json({ error: 'Internal Server Error' });
                      }
                      console.log(newUser, 'New User created and logged in');
                      return res.redirect('/api/dashboard');
                    });
                  });
                })
                .catch((error) => {
                  console.error(error);
                  return res.status(500).json({ error: 'Internal Server Error' });
                });
            })
            .catch((error) => {
              console.error(error);
              return res.status(500).json({ error: 'Internal Server Error' });
            });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports = registerUser;