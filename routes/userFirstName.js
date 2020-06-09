const express = require('express');
const router = express.Router();
const{check, validationResult} = require('express-validator');

const User =require('../src/models/user');

// @route get /users
router.get('/', [
    check('firstName', 'First Name is Required').not().isEmpty(),

],
async (req, res) => {
  const errors = validationResult(req);
  if(!error.isEmpty()){
      return res.status(400).json({errors: errors.array()});
  }
  const {firstName} =req.body;
  try{
      let user = await User.findOne({firstName});
  } catch(err){

  }
});

module.exports = router;