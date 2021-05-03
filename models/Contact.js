const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user: {
        // Relationship Definition
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal', // Personal || Professional
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('contact', ContactSchema);
