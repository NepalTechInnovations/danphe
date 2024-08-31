// const express = require ('express');
// const routes = express.Router();
// const controller = require ('../controller/orderController');
// const { requireLogin, isAdmin } = require('../middleware/authMiddleware');

// routes.post('/createOrder', requireLogin, controller.createOrder);
// routes.get('/getOrder', requireLogin, controller.getOrders);
// routes.get('/yourOrder', requireLogin, controller.getYourOders);
// routes.put('/updateOrderStatus', requireLogin, controller.updateOrderStatus);


// module.exports = routes;




const express = require('express');
const routes = express.Router();
const controller = require('../controller/orderController');
const { requireLogin, isAdmin } = require('../middleware/authMiddleware');

routes.post('/createOrder', requireLogin, controller.createOrder);
routes.get('/getOrders', requireLogin, controller.getOrders);
routes.get('/yourOrder', requireLogin, controller.getYourOrders);
routes.put('/updateOrderStatus', requireLogin, controller.updateOrderStatus);
routes.get('/order-count',requireLogin, controller.getOrderCount); 

//stripe payment route
routes.post('/create-payment-intent', controller.createPaymentIntent);




module.exports = routes;
