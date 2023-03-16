const mongoose = require ('mongoose');
const { Schema } = mongoose;
const { STATUS_CONTACT } = require("../libs/messages");

const contactSchema = new Schema({
  name:  {type: String,  required: true, unique: true},
  email: {type: String, unique: true},
  phone: {type:Number},
  favorite: {type: Boolean, default: false}
})

contactSchema.virtual('status').get(function(){
    return this.isFavorite 
    ? STATUS_CONTACT.FAVORITE 
    : STATUS_CONTACT.NORMAL;
})

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;