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
router.post('/', [auth, [
    check('name', 'Name is required. Please enter the contact name.').not().isEmpty()
]], async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) return response.status(400).json({ errors: errors.array() });

    const { name, email, phone, type } = request.body;

    try {

        const initContact = new Contact({
            name,
            email,
            phone,
            type,
            user: request.user.id,
        });

        const contact = await initContact.save();

        response.json(contact);
    } catch (err) {
        console.error(err.message);
        response.status(500).send('Server is hot. Please try again later.');
    }
});

/**
 *  @route   PUT api/contacts/:id
 *  @desc    Update contact
 *  @access  Private
 */
router.put('/:id', auth, async (request, response) => {

    const { name, email, phone, type } = request.body;

    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;

    try {
        let contact = await Contact.findById(request.params.id);

        if (!contact) return response.status(404).json({ msg: 'Contact not found. PLease check you url.' });

        // Check id the Contact Data is of logged in User or not.
        if (contact.user.toString() !== request.user.id) return response.status(401).json({ msg: 'Unauthorized. You cannot change this contact information.' });

        contact = await Contact.findByIdAndUpdate(request.params.id,
            { $set: contactFields },
            { new: true });

        response.json(contact);
    } catch (err) {
        console.error(err.message);
        response.status(500).send('Server is hot. Please try again later.');
    }
});

/**
 *  @route   Delete api/contacts/:id
 *  @desc    Delete contact
 *  @access  Private
 */
router.delete('/:id', auth, async (request, response) => {
    try {
        let contact = await Contact.findById(request.params.id);

        if (!contact) return response.status(404).json({ msg: 'Contact not found. PLease check you url.' });

        // Check id the Contact Data is of logged in User or not.
        if (contact.user.toString() !== request.user.id) return response.status(401).json({ msg: 'Unauthorized. You cannot change this contact information.' });

        await Contact.findByIdAndRemove(request.params.id);

        response.json({msg: 'Contact removed successfully.'});
    } catch (err) {
        console.error(err.message);
        response.status(500).send('Server is hot. Please try again later.');
    }
});

module.exports = router;
