const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

/**
 *  @route   GET api/contacts
 *  @desc    Get All User's contacts
 *  @access  Private
 */
router.get('/', auth, async (request, response) => {
    try {
        const contacts = await Contact.find({ user: request.user.id }).sort({ date: -1 });

        response.json(contacts);
    } catch (err) {
        console.log(err.message);
        response.status(500).send('Server is hot. Please try again later.');
    }
});

/**
 *  @route   POST api/contacts
 *  @desc    Add New contact
 *  @access  Private
 */
router.post('/', (request, response) => {
    response.send('Add new Contact');
});

/**
 *  @route   PUT api/contacts/:id
 *  @desc    Update contact
 *  @access  Private
 */
router.put('/:id', (request, response) => {
    response.send('Update Contact');
});

/**
 *  @route   Delete api/contacts/:id
 *  @desc    Delete contact
 *  @access  Private
 */
router.delete('/:id', (request, response) => {
    response.send('Delete Contact');
});

module.exports = router;
