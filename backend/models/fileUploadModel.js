const mongoose = require('mongoose');


const fileUploadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    
    images: [{
        type: String
    }]
}, { timestamps: true });


const fileUploadModel = mongoose.model('Documents', fileUploadSchema);
module.exports = fileUploadModel;
