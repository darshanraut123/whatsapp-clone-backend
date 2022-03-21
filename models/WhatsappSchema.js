const mongoose = require("mongoose");

const whatsappSchema = mongoose.Schema({
    message: {type: String,required: true},
    name: {type: String,required: true},
    timestamp: {type: String,required: false},
    received: {type:Boolean}
    
});
const whatsappMessage = mongoose.model('messagecontents',whatsappSchema);
module.exports =  {whatsappMessage}