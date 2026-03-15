const { UserCreateDto } = require('../dto/user.dto.js');
const User = require('../model/user.create.dto.js');
const logger = require('../utils/logger.js');

exports.create = async (req, res) => {
  const start = Date.now();

  const { error, value } = UserCreateDto.validate(req.body);

  if (error) {
    logger.warn('VALIDATION_FAILED', {
      layer: 'controller',
      details: error.details[0].message,
      input: req.body, 
      duration: Date.now() - start
    });
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const newUser = await User.create(value);
    
    logger.info('USER_CREATED', {
      userId: newUser._id,
      duration: Date.now() - start
    });

    res.status(201).json(newUser);
  } catch (err) {
    logger.error('DATABASE_ERROR', {
      error: err.message,
      stack: err.stack,
      duration: Date.now() - start
    });
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
