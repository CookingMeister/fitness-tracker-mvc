const router = require('express').Router();
const { User } = require('../../models');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// Get user profile
router.get('/', async (req, res) => {
  try {
    // if (!req.isAuthenticated()) {
    //   return res.status(401).json({ error: 'Unauthorized' });
    // }
    const users = await User.findAll();
    res.render('user.ejs', { users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Route to get user by ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.render('userDetails.ejs', { user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Error fetching user');
  }
});
  








// Update user profile
router.put('/:id', async (req, res) => {
  // // Authentication middleware in place
  // if (!req.isAuthenticated()) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }
  const id = req.params.id;
  const { username } = req.body;

  try {
    const user = await User.findByPk(id);
// Update only the fields that were sent in the request
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      user.username = username;
    }

    await User.update({ username }, { where: { id } });
    console.log('User updated');
    res.redirect('/');
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete user profile
router.delete('/:id', async (req, res) => {
  // Authentication middleware in place
  // if (!req.isAuthenticated()) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }
  console.log('delete user route called');
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(204).json({ message: 'User deleted' });
    // Log the user out
    // req.logout(); // requires a callback function ????????????????????????????????????????
    // Redirect to homepage
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
