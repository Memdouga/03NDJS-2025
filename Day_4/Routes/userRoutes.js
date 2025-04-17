const express = require('express');
const auth = require('../middleware/auth');
const { getAllUsers, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', auth, getAllUsers);
router.delete('/:id', auth, deleteUser);

module.exports = router;