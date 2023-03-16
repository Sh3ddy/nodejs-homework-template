const express = require('express')
const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../../controllers/contacts/index')
const { schemaCreateContact, schemaMongoId} = require('./contact-validation-scheme')
const {validateBody, validateParams} = require('../../middlewares/validation')
const router = express.Router()

router.get("/", listContacts);


router.get('/:contactId', validateParams(schemaMongoId),getContactById)

router.post('/', validateBody(schemaCreateContact),addContact)

router.delete('/:contactId', validateParams(schemaMongoId),removeContact)

router.put('/:contactId', validateParams(schemaMongoId), updateContact)

router.patch(
  "/:contactId/favorite",
  [validateParams(schemaMongoId),
  validateBody(schemaCreateContact)],
  updateContact,
)

module.exports = router
