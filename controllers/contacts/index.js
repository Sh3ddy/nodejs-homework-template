const { HTTP_STATUS_CODE } = require('../../libs/constants')
const contactSchema = require('../../repository/contacts')

const listContacts = async (req, res, next) => {
    const contacts = await contactSchema.listContacts()
    res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contacts }})
  }
  
const getContactById = async (req, res, next) => {
    const contact = await contactSchema.getContactById( req.params.contactId)
    if(contact){
      return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact }})
    }
    return res
    .status(HTTP_STATUS_CODE.NOT_FOUND)
    .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found'})
  }
  
const addContact = async (req, res, next) => {
    const contact = await contactSchema.addContact( req.body)
    res.status(HTTP_STATUS_CODE.CREATED).json({ status: 'success', code: HTTP_STATUS_CODE.CREATED, payload: { contact }})
  }
  
const removeContact = async (req, res, next) => {
    const contact = await contactSchema.removeContact( req.params.contactId)
    if(contact){
      return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact }})
    }
    return res
    .status(HTTP_STATUS_CODE.NOT_FOUND)
    .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found'})
  }
  
const updateContact = async (req, res, next) => {
    const contact = await contactSchema.updateContact( req.params.contactId, req.body)
    if(contact){
      return res.json({ status: 'success', code: HTTP_STATUS_CODE.OK, payload: { contact }})
    }
    return res
    .status(HTTP_STATUS_CODE.NOT_FOUND)
    .json({ status: 'error', code: HTTP_STATUS_CODE.NOT_FOUND, message: 'Not found'})
  }

  module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
  };