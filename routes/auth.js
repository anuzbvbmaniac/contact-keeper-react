const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

/**
 *  @route   GET api/auth
 *  @desc    Get Logged in User
 *  @access  Private
 */
router.get('/', auth, async (request, response) => {

    try {

        const user = await User.findById(request.user.id).select('-password');
        response.json(user);

    } catch (err) {
        console.error(err.message);
        response.status(500).send('Server is hot. Please try again later.');
    }

});

/**
 *  @route   POST api/auth
 *  @desc    Auth User and Get token
 *  @access  Public
 */
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please type your password.').exists(),
], async (request, response) => {

    const errors = validationResult(request);

    if (!errors) return response.status(400).json({ errors: errors.array() });

    const { email, password } = request.body;

    try {

        let user = await User.findOne({ email });

        if (!user) return response.status(400).json({ msg: 'Invalid email address. User not found.' });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return response.status(400).json({ msg: 'Invalid password. Please check your password.' });

        const payload = {
            user: { id: user.id }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000 // set to 3600 on production
        }, (error, token) => {
            if (error) throw error;
            response.json({ token })
        });

    } catch (err) {
        console.error(err.message);
        response.status(500).send('Server is hot. Please try again later.');
    }

});

module.exports = router;
