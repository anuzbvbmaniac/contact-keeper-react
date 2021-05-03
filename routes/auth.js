const express = require('express');

const router = express.Router();

/**
 *  @route   GET api/auth
 *  @desc    Get Logged in User
 *  @access  Private
 */
router.get('/', (request, response) => {
    response.send('Get Logged in User.');
});

/**
 *  @route   POST api/auth
 *  @desc    Auth User and Get token
 *  @access  Public
 */
router.post('/', (request, response) => {
    response.send('Log in User.');
});

/**
 *  @route   POST api/auth
 *  @desc    Auth User and Get token
 *  @access  Public
 */
router.post('/', (request, response) => {
    response.send('Log in User.');
});

module.exports = router;
