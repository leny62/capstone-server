// const User = require('../models/users.model.js');
const express = require('express');
const {createUser} = require('../controllers/user');

const router = express.Router();
router.post('/newUser',createUser);


module.exports = router;