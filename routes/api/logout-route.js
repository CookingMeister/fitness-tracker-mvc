const router = require('express').Router();

// ends session, logs user out
router.post('/', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'There was an error logging out' });    
      } else {
        res.redirect('/');
      }
    });
});

  module.exports = router;