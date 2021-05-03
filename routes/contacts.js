const express = require('express');

const router = express.Router();

/**
 *  @route   GET api/contacts
 *  @desc    Get All User's contacts
 *  @access  Private
 */
router.get('/', (request, response) => {
    response.send('Get all Contacts');
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
