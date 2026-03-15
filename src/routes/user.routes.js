const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { UserCreateDto } = require('../dto/user.dto');
const validate = require('../utils/logger.js');

router.post('/', validate(UserCreateDto), userController.create);

module.exports = router;
