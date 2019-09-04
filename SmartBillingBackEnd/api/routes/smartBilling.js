const express = require('express');
const router = express.Router();
const multer = require('multer');
//--------------------------------------------------------------------
const authController = require('../controller/authenticationCtrl');
const invoiceController = require('../controller/invoiceController');
const userController = require('../controller/userController');
const productController = require('../controller/productController');
//--------------------------------------------------------------------
router.post('/register',multer().single(),authController.register);

router.post('/resetPass',authController.resetPassEmail);

router.post('/reset',multer().single(),authController.resetPassword)

router.post('/login',multer().single(),authController.login)

router.post('/add',multer().single(),userController.addProductByUser)

router.get('/userData/:email',userController.userData);

router.get('/allProduct/:email',multer().single(),userController.getProductByUser)

router.delete('/delete/:id',productController.deleteProduct)

router.get('/getDataById/:id', multer().single(),productController.getProduct)

router.patch('/update/:id',multer().single(),productController.updateProduct)

router.post('/invoiceData/:email',multer().single(),invoiceController.invoiceData);

router.get('/allInvoice/:email', invoiceController.invoiceDetails);

module.exports =router; 