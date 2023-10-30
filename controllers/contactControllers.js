const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler ((req, res) => {
    res.status(300).json({message:'Get all Contacts'});
    // res.send("get messages");
});
//@desc  create all contacts
//@route POST /api/contacts
//@access public
const createContact =asyncHandler ((req, res) => {
    console.log("request body",req.body);
    const {name} = req.body;
    if(!name) {
         res.status(400);
         throw new Error("All fields are mandatory");
    }
    res.status(301).json({message:'create Contacts'});
    // res.send("get messages");
});
//@desc  get contacts
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler ((req, res) => {
    res.status(300).json({message:`get Contacts for ${req.params.id}`});
    // res.send("get messages");
});
//@;desc  update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler ((req, res) => {
    res.status(300).json({message:`update Contacts for ${req.params.id}`});
    // res.send("get messages");
});
//@desc  delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler ((req, res) => {
    res.status(300).json({message:`delete Contacts for ${req.params.id}`});
    // res.send("get messages");
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};