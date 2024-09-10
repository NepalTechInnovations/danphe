// models/UserData.js
const mongoose = require('mongoose');

const UserAllDataSchema = new mongoose.Schema({
    quoteData: Object,
    packageData: Object,
    contactData: Object,
    companyData: Object,
  }, { timestamps: true }); 
  

const UserAllData = mongoose.model('UserData', UserAllDataSchema);

module.exports = UserAllData;
