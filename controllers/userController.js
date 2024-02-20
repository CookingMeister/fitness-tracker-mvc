const passport = require('./../config/passport.js');

// Login User, authenticate user, and save user data in session, redirect to home page
const loginUser = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    err
      ? res.status(500).json({ message: 'There was an error logging in' })
      : !user
      ? res.status(401).json({ message: 'Incorrect username or password' })
      : req.login(user, (err) => {
          err
            ? res.status(500).json({ message: 'There was an error logging in' })
            : // Save user data in session
              (req.session.userId = user.id);
          req.session.username = user.username;
          req.session.loggedIn = true;
          req.session.save((err) => {
            err
              ? res
                  .status(500)
                  .json({ message: 'There was an error logging in' })
              : console.log('User logged in');
            res.redirect('/api/dashboard');
          });
        });
  })(req, res, next);
}

// ends session, logs user out, and redirects to home page
const logoutUser = async (req, res) => {
  await req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'There was an error logging out' });
    } else {
      res.redirect('/');
    }
  });
}

module.exports = loginUser;
module.exports = logoutUser;