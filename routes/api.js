/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = (app) => {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let spellOutUnit = convertHandler.spellOutUnit(returnUnit);
      
    
      if (returnNum == "NaN" && returnUnit == "none") { res.send("invalid number and unit") }
      else if (returnNum == "NaN") { res.send("invalid number") }
      else if (returnUnit == "none") { res.send("invalid unit") }
      else {
        let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        
        res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string: toString
        });
      }
    });
    
};
