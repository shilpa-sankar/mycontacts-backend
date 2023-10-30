const express = require("express");
const router = express.Router();

const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact } = require("../controllers/contactControllers");

// a router can route more than one http method 
// if the passing link is same.

router.route('/').get (getContacts).post (createContact);
router.route('/:id').get (getContact).put (updateContact).delete (deleteContact);

module.exports =router;
