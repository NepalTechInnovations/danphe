const express = require('express');
const routes = express.Router();
const controller = require ('../controller/fileUploadController');

routes.post('/uploadDocuments', controller.uploadDocuments);
routes.get('/allDocuments', controller.getAllDocuments);



module.exports = routes;
