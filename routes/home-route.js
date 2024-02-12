const router = require('express').Router();


// Route to render the home page using EJS
router.get('/', (req, res) => {
  res.render('home.ejs');
});

// Error handling for undefined routes
router.use((req, res) => {
    res.status(404).render('error');
  });

module.exports = router;
