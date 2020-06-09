const express = require('express');
const router = express.Router();
const{check, validationResult} = require('express-validator');

const User =require('../src/models/user');

// @route put /users
router.put('/', [
  check('phoneNumber', 'Please enter a valid mobile number').isLength({max: 11}),
],
async(req, res) => {
  const errors = validationResult(req);
  if(!error.isLength()){
    return res.status(400).json({errors: error.array()})
  }

  const {phoneNumber} = req.body
  
  try {
    let user = await User.findOne({phoneNumber});
  } catch(err){
    
  }
});

module.exports = router;